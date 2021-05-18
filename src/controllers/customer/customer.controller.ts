import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';

import { CustomerService } from '../../services/customer/customer.service';
import { CreateCustomerDto, UpdateCustomerDto } from '../../dtos/customer.dtos';

@Controller('customers')
export class CustomerController {
  constructor(private customersService: CustomerService) {}

  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':customerId')
  get(@Param('customerId', ParseIntPipe) customerId: number) {
    return this.customersService.findOne(customerId);
  }

  @Post()
  create(@Body() payload: CreateCustomerDto) {
    return this.customersService.create(payload);
  }

  @Put(':customerId')
  update(
    @Param('customerId', ParseIntPipe) customerId: number,
    @Body() payload: UpdateCustomerDto,
  ) {
    return this.customersService.update(customerId, payload);
  }

  @Delete(':customerId')
  remove(@Param('customerId', ParseIntPipe) customerId: number) {
    return this.customersService.remove(+customerId);
  }
}
