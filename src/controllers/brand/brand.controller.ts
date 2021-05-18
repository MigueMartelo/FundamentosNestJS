import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';

import { BrandService } from '../../services/brand/brand.service';
import { CreateBrandDto, UpdateBrandDto } from '../../dtos/brand.dtos';

@Controller('brands')
export class BrandController {
  constructor(private brandsService: BrandService) {}

  @Get()
  findAll() {
    return this.brandsService.findAll();
  }

  @Get(':brandId')
  get(@Param('brandId', ParseIntPipe) brandId: number) {
    return this.brandsService.findOne(brandId);
  }

  @Post()
  create(@Body() payload: CreateBrandDto) {
    return this.brandsService.create(payload);
  }

  @Put(':brandId')
  update(
    @Param('brandId', ParseIntPipe) brandId: number,
    @Body() payload: UpdateBrandDto,
  ) {
    return this.brandsService.update(brandId, payload);
  }

  @Delete(':brandId')
  remove(@Param('brandId', ParseIntPipe) brandId: number) {
    return this.brandsService.remove(+brandId);
  }
}
