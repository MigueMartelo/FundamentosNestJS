import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { CategoryController } from './controllers/category/category.controller';
import { OrderController } from './controllers/order/order.controller';
import { UserController } from './controllers/user/user.controller';
import { CustomerController } from './controllers/customer/customer.controller';
import { BrandController } from './controllers/brand/brand.controller';

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
  providers: [AppService],
})
export class AppModule {}
