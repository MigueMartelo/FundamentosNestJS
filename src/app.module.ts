import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { CategoryController } from './controllers/category/category.controller';
import { OrderController } from './controllers/order/order.controller';
import { UserController } from './controllers/user/user.controller';
import { CustomerController } from './controllers/customer/customer.controller';
import { BrandController } from './controllers/brand/brand.controller';
import { ProductsService } from './services/products/products.service';
import { BrandService } from './services/brand/brand.service';
import { CategoryService } from './services/category/category.service';
import { CustomerService } from './services/customer/customer.service';
import { OrderService } from './services/order/order.service';
import { UserService } from './services/user/user.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoryController,
    OrderController,
    UserController,
    CustomerController,
    BrandController,
  ],
  providers: [
    AppService,
    ProductsService,
    BrandService,
    CategoryService,
    CustomerService,
    OrderService,
    UserService,
  ],
})
export class AppModule {}
