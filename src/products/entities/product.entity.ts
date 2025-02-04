import {
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  Index,
  Entity,
} from 'typeorm';
import slugify from 'slugify';
import { IsNotEmpty, IsUrl, IsString, IsDate } from 'class-validator';

@Entity({ name: 'products' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsNotEmpty()
  @IsUrl()
  image: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  title: string;

  @Column()
  price: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  category: string;

  @Column()
  @Index({ unique: true })
  slug: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  description: string;

  @CreateDateColumn()
  @IsDate()
  createdAt: Date;

  @UpdateDateColumn()
  @IsDate()
  updatedAt: Date;

  @BeforeInsert()
  generateSlug() {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
}
