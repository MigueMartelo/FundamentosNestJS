import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('order')
export class OrderController {
  @Get(':orderId')
  getOrder(@Param('orderId') orderId: string) {
    return `Order: ${orderId}`;
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: `Create action`,
      payload,
    };
  }

  @Put(':orderId')
  update(@Param('orderId') orderId: string, @Body() payload: any) {
    return {
      orderId,
      payload,
    };
  }

  @Delete(':orderId')
  delete(@Param('orderId') orderId: string) {
    return {
      orderId,
    };
  }
}
