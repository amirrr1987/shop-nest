import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

const createBlogSchema = z
  .object({
    title: z.string(),
    description: z.string(),
  })
  .strict();

export class CreateBlogDto extends createZodDto(createBlogSchema) {}
