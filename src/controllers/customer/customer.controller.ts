import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

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

  @Put(':customerId')
  update(@Param('customerId') customerId: string, @Body() payload: any) {
    return {
      customerId,
      payload,
    };
  }

  @Delete(':customerId')
  delete(@Param('customerId') customerId: string) {
    return {
      customerId,
    };
  }
}
