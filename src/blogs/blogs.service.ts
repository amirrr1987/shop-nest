import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { pick } from 'lodash';

@Injectable()
export class BlogsService {
  create(createBlogDto: CreateBlogDto) {
    // const obj = pick(createBlogDto, ['title', 'description']) as CreateBlogDto;

    return {
      data: createBlogDto,
    };
  }

  findAll() {
    return `This action returns all blogs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} blog`;
  }

  update(id: number, updateBlogDto: UpdateBlogDto) {
    return `This action updates a #${id} blog`;
  }

  remove(id: number) {
    return `This action removes a #${id} blog`;
  }
}
