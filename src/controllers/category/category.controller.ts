import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('category')
export class CategoryController {
  @Get(':id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `Product ${productId} and Category ${id}`;
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: `Create action`,
      payload,
    };
  }
}
