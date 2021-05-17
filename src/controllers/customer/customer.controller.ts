import { Controller, Get, Param } from '@nestjs/common';

@Controller('customer')
export class CustomerController {
  @Get(':customerId')
  getCustomer(@Param('customerId') customerId: string) {
    return `Customer: ${customerId}`;
  }
}
