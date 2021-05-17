import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { ProductsService } from '../../services/products/products.service';

import { ParseIntPipe } from './../../common/parse-int.pipe';
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.productsService.findAll();
  }

  @Get('filter')
  getProductFilter() {
    return {
      message: `Yo soy un filter`,
    };
  }

  @Get(':productId')
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
    return this.productsService.findOne(productId);
  }

  @Post()
  create(@Body() payload: any) {
    return this.productsService.create(payload);
  }

  @Put(':productId')
  update(@Param('productId') productId: number, @Body() payload: any) {
    return this.productsService.update(productId, payload);
  }

  @Delete(':productId')
  delete(@Param('productId') productId: number) {
    return this.productsService.delete(productId);
  }
}
