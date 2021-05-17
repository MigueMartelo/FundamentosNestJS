import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('brand')
export class BrandController {
  @Get('brandId')
  getBrand(@Param('brandId') brandId: string) {
    return `Brand: ${brandId}`;
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: `Create action`,
      payload,
    };
  }
}
