import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

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

  @Put(':categoryId')
  update(@Param('categoryId') categoryId: string, @Body() payload: any) {
    return {
      categoryId,
      payload,
    };
  }

  @Delete(':categoryId')
  delete(@Param('categoryId') categoryId: string) {
    return {
      categoryId,
    };
  }
}
