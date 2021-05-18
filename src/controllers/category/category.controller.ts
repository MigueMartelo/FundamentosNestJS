import { ParseIntPipe } from './../../common/parse-int.pipe';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { CategoryService } from './../../services/category/category.service';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/dtos/category.dtos';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  getCategories() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  getCategory(@Param('categoryId', ParseIntPipe) categoryId: number) {
    return this.categoryService.findOne(categoryId);
  }

  @Post()
  create(@Body() payload: CreateCategoryDto) {
    return this.categoryService.create(payload);
  }

  @Put(':categoryId')
  update(
    @Param('categoryId') categoryId: number,
    @Body() payload: UpdateCategoryDto,
  ) {
    return this.categoryService.update(categoryId, payload);
  }

  @Delete(':categoryId')
  delete(@Param('categoryId') categoryId: number) {
    return this.categoryService.delete(categoryId);
  }
}
