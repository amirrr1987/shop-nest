import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { BlogsModule } from './blogs/blogs.module';
import { CommentsModule } from './comments/comments.module';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [UsersModule, ProductsModule, BlogsModule, CommentsModule, MenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
