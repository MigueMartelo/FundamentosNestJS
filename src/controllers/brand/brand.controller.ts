import { Controller, Get, Param } from '@nestjs/common';

@Controller('brand')
export class BrandController {
  @Get('brandId')
  getBrand(@Param('brandId') brandId: string) {
    return `Brand: ${brandId}`;
  }
}
