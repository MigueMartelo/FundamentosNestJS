import { Injectable, NotFoundException } from '@nestjs/common';

import { Category } from '../../entities/category.entity';
import {
  CreateCategoryDto,
  UpdateCategoryDto,
} from './../../dtos/category.dtos';

@Injectable()
export class CategoryService {
  private counterId = 1;
  private categories: Category[] = [
    {
      id: 1,
      name: 'deporte',
    },
  ];

  findAll() {
    return this.categories;
  }

  findOne(categoryId: number) {
    const category = this.categories.find((item) => item.id === categoryId);
    if (!category) {
      throw new NotFoundException(`category #${categoryId} not found.`);
    }
    return category;
  }

  create(payload: CreateCategoryDto) {
    this.counterId = this.counterId + 1;
    const newCategory = {
      id: this.counterId,
      ...payload,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  delete(categoryId: number) {
    const deletedCategory = this.categories.filter(
      (item) => item.id !== categoryId,
    );
    return deletedCategory;
  }

  update(categoryId: number, payload: UpdateCategoryDto) {
    const category = this.findOne(categoryId);
    const updatedCategoryIndex = this.categories.findIndex(
      (item) => item.id === categoryId,
    );
    this.categories[updatedCategoryIndex] = {
      ...category,
      ...payload,
    };
    return this.categories[updatedCategoryIndex];
  }
}
