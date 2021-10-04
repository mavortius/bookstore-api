import { Product } from './product.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  products: Product[] = [
    new Product('LIV001', 'TDD e BDD na prática', 29.9),
    new Product('LIV002', 'Iniciando com Flutter', 39.9),
    new Product('LIV003', 'Inteligência artificial como serviço', 25.9),
  ];

  getAll(): Product[] {
    return this.products;
  }

  getById(id: number): Product {
    return this.products.find((p) => p.id === id);
  }

  create(product: Product): Product {
    this.products.push(product);
    return product;
  }

  update(id: number, product: Product): Product {
    const index = this.products.findIndex((p) => p.id === id);
    if (index) {
      this.products[index] = product;
    }
    return product;
  }

  remove(id: number): void {
    const index = this.products.findIndex((p) => p.id === id);
    this.products = this.products.slice(index, 1);
  }
}
