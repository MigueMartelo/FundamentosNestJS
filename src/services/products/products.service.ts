import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from '../../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../../dtos/products.dtos';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description product 1',
      price: 100,
      stock: 10,
      image: '',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(productId: number) {
    const product = this.products.find((item) => item.id === productId);
    if (!product) {
      throw new NotFoundException(`Product #${productId} not found.`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  delete(productId: number) {
    const deletedProduct = this.products.filter(
      (item) => item.id !== productId,
    );
    return deletedProduct;
  }

  update(productId: number, payload: UpdateProductDto) {
    const product = this.findOne(productId);
    const updatedProductIndex = this.products.findIndex(
      (item) => item.id === productId,
    );
    this.products[updatedProductIndex] = {
      ...product,
      ...payload,
    };
    return this.products[updatedProductIndex];
  }
}
