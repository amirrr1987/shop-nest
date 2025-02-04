import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { ProductEntity } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IProductService } from './interfaces/product.service.interface';
import { IdParam, SlugParam } from './dto/params.dto';
import { ResponseService } from 'src/response/response.service';
import slugify from 'slugify';

@Injectable()
export class ProductsService implements IProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productsRepository: Repository<ProductEntity>,
    private readonly responseService: ResponseService,
  ) {}
  async createProduct(dto: CreateProductDto): Promise<string> {
    try {
      const newSlug = slugify(dto.title, { lower: true, strict: true });
      const existProduct = await this.findProductBySlug(newSlug as SlugParam);
      if (existProduct === newSlug) {
        return this.responseService.duplicated('product');
      } else {
        const newProduct = this.productsRepository.create(dto);
        const savedProduct = await this.productsRepository.save(newProduct);
        return this.responseService.create('product', savedProduct.id);
      }
    } catch (error) {
      throw new Error(error);
    }
  }
  async findProductList(): Promise<ProductEntity[]> {
    try {
      return await this.productsRepository.find();
    } catch (error) {
      throw new Error(error);
    }
  }
  async findProductById(id: IdParam): Promise<ProductEntity> {
    try {
      return await this.productsRepository.findOneBy({ id });
    } catch (error) {
      throw new Error(error);
    }
  }
  async findProductBySlug(slug: SlugParam): Promise<ProductEntity | string> {
    const product = await this.productsRepository.findOneBy({ slug });
    if (!product) return this.responseService.notFound('product');
    return await this.productsRepository.findOneBy({ slug });
  }
  async updateProductById(id: string, dto: UpdateProductDto): Promise<string> {
    try {
      await this.productsRepository.update(id, dto);
      return this.responseService.updateById('product', id);
    } catch (error) {
      throw new Error(error);
    }
  }
  async deleteProductById(id: string): Promise<string> {
    try {
      await this.productsRepository.delete(id);
      return this.responseService.deleteById('product', id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
