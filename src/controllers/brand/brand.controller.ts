import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

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

  @Put(':brandId')
  update(@Param('brandId') brandId: string, @Body() payload: any) {
    return {
      brandId,
      payload,
    };
  }

  @Delete(':brandId')
  delete(@Param('brandId') brandId: string) {
    return {
      brandId,
    };
  }
}
