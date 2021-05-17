import { Body, Controller, Get, Param, Post } from '@nestjs/common';

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
}
