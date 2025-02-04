import { Injectable } from '@nestjs/common';

@Injectable()
export class ResponseService {
  create(key: string, id: string | number) {
    return `${key} width id: ${id} created successfully`;
  }

  findList(key: string) {
    return `List of ${key} retrieved successfully`;
  }

  findTable(key: string) {
    return `Table of ${key} retrieved successfully`;
  }

  findById(key: string, id: string | number) {
    return `Response found by id: ${id} successfully`;
  }

  findByFlied(key: string, id: string | number) {
    return `${key} found by id: ${id} successfully`;
  }

  updateById(key: string, id: string | number) {
    return `${key} updated by id: ${id} successfully`;
  }

  deleteById(key: string, id: string | number) {
    return `${key} deleted by id: ${id} successfully`;
  }

  duplicated(key: string) {
    return `${key} data is duplicated`;
  }
  notFound(key: string) {
    return `${key} data not found`;
  }
}
