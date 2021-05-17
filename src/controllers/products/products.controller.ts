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

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `Products limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    // };
    return this.productsService.findAll();
  }

  @Get('filter')
  getProductFilter() {
    return {
      message: `Yo soy un filter`,
    };
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: number) {
    // return {
    //   message: `Product ${productId}`,
    // };
    return this.productsService.findOne(productId);
  }

  @Post()
  create(@Body() payload: any) {
    // return {
    //   message: `Create action`,
    //   payload,
    // };
    return this.productsService.create(payload);
  }

  @Put(':productId')
  update(@Param('productId') productId: number, @Body() payload: any) {
    // return {
    //   productId,
    //   payload,
    // };
    return this.productsService.update(productId, payload);
  }

  @Delete(':productId')
  delete(@Param('productId') productId: number) {
    // return {
    //   productId,
    // };
    return this.productsService.delete(productId);
  }
}
