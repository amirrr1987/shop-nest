import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { ProductEntity } from '../entities/product.entity';

export interface IProductService {
  createProduct(dto: CreateProductDto): Promise<string>;
  findProductList(): Promise<ProductEntity[]>;
  findProductById(id: string): Promise<ProductEntity | string>;
  findProductBySlug(id: string): Promise<ProductEntity | string>;
  updateProductById(id: string, dto: UpdateProductDto): Promise<string>;
  deleteProductById(id: string): Promise<string>;
}
