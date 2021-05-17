import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `Products limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
  }

  @Get('filter')
  getProductFilter() {
    return `Yo soy un filter`;
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return `Product ${productId}`;
  }
}