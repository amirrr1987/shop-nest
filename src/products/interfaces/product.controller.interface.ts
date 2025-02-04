import { CreateProductDto } from '../dto/create-product.dto';
import { IdParam, SlugParam } from '../dto/params.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { ProductEntity } from '../entities/product.entity';

export interface IProductController {
  createProduct(dto: CreateProductDto): Promise<string>;
  findProductList(): Promise<ProductEntity[]>;
  findProductById(id: IdParam): Promise<ProductEntity>;
  findProductBySlug(id: SlugParam): Promise<ProductEntity | string>;
  updateProductById(id: IdParam, dto: UpdateProductDto): Promise<string>;
  deleteProductById(id: IdParam): Promise<string>;
}
