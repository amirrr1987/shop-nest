import { UpdateProductDto } from './update-product.dto';

export type Brand<K, T> = T & { __brand: K };

export type IdParam = Brand<'id', UpdateProductDto['id']>;
export type SlugParam = Brand<'slug', UpdateProductDto['slug']>;
