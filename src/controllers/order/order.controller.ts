import { Controller, Get, Param } from '@nestjs/common';

@Controller('order')
export class OrderController {
  @Get(':orderId')
  getOrder(@Param('orderId') orderId: string) {
    return `Order: ${orderId}`;
  }
}
