import { Injectable, NotFoundException } from '@nestjs/common';

import { Brand } from '../../entities/brand.entity';
import { CreateBrandDto, UpdateBrandDto } from '../../dtos/brand.dtos';

@Injectable()
export class BrandService {
  private counterId = 1;
  private brands: Brand[] = [
    {
      id: 1,
      name: 'Brand 1',
      image: 'https://i.imgur.com/U4iGx1j.jpeg',
    },
  ];

  findAll() {
    return this.brands;
  }

  findOne(brandId: number) {
    const brand = this.brands.find((item) => item.id === brandId);
    if (!brand) {
      throw new NotFoundException(`Brand #${brandId} not found`);
    }
    return brand;
  }

  create(data: CreateBrandDto) {
    this.counterId = this.counterId + 1;
    const newBrand = {
      id: this.counterId,
      ...data,
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  update(brandId: number, changes: UpdateBrandDto) {
    const brand = this.findOne(brandId);
    const index = this.brands.findIndex((item) => item.id === brandId);
    this.brands[index] = {
      ...brand,
      ...changes,
    };
    return this.brands[index];
  }

  remove(brandId: number) {
    const index = this.brands.findIndex((item) => item.id === brandId);
    if (index === -1) {
      throw new NotFoundException(`Brand #${brandId} not found`);
    }
    this.brands.splice(index, 1);
    return true;
  }
}
