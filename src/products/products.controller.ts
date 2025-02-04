import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { IProductController } from './interfaces/product.controller.interface';
import { ProductEntity } from './entities/product.entity';
import { IdParam, SlugParam } from './dto/params.dto';

@Controller('v2/products')
export class ProductsController implements IProductController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async createProduct(@Body() dto: CreateProductDto) {
    return await this.productsService.createProduct(dto);
  }

  @Get()
  async findProductList() {
    return await this.productsService.findProductList();
  }

  @Get(':id')
  async findProductById(@Param('id') id: IdParam) {
    return await this.productsService.findProductById(id);
  }
  @Get('slug/:id')
  async findProductBySlug(slug: SlugParam): Promise<ProductEntity | string> {
    return await this.productsService.findProductBySlug(slug);
  }

  @Patch(':id')
  async updateProductById(
    @Param('id') id: IdParam,
    @Body() dto: UpdateProductDto,
  ) {
    return await this.productsService.updateProductById(id, dto);
  }

  @Delete(':id')
  async deleteProductById(@Param('id') id: IdParam) {
    return await this.productsService.deleteProductById(id);
  }
}
