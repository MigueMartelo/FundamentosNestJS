import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('customer')
export class CustomerController {
  @Get(':customerId')
  getCustomer(@Param('customerId') customerId: string) {
    return `Customer: ${customerId}`;
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: `Create action`,
      payload,
    };
  }
}
