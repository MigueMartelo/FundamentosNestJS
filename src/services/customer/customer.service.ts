import { Injectable, NotFoundException } from '@nestjs/common';

import { Customer } from '../../entities/customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from '../../dtos/customer.dtos';

@Injectable()
export class CustomerService {
  private counterId = 1;
  private customers: Customer[] = [
    {
      id: 1,
      name: 'Nicolas',
      lastName: 'Molina',
      phone: '3111111212',
    },
  ];

  findAll() {
    return this.customers;
  }

  findOne(customerId: number) {
    const customer = this.customers.find((item) => item.id === customerId);
    if (!customer) {
      throw new NotFoundException(`Customer #${customerId} not found`);
    }
    return customer;
  }

  create(data: CreateCustomerDto) {
    this.counterId = this.counterId + 1;
    const newCustomer = {
      id: this.counterId,
      ...data,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }

  update(customerId: number, changes: UpdateCustomerDto) {
    const customer = this.findOne(customerId);
    const index = this.customers.findIndex((item) => item.id === customerId);
    this.customers[index] = {
      ...customer,
      ...changes,
    };
    return this.customers[index];
  }

  remove(customerId: number) {
    const index = this.customers.findIndex((item) => item.id === customerId);
    if (index === -1) {
      throw new NotFoundException(`Customer #${customerId} not found`);
    }
    this.customers.splice(index, 1);
    return true;
  }
}
