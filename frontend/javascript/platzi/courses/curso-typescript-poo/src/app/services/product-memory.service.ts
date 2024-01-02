import { faker } from '@faker-js/faker';

import { Product } from '../models/product.model';
import { CreateProductDto, UpdateProductDto } from '../dto/product.dto';
import { ProductService } from '../models/product-service.model';

export class ProductMemoryService implements ProductService {
  private products: Product[] = [];

  getAll() {
    return this.products;
  }

  create(dto: CreateProductDto) {
    const newProduct = {
      ...dto,
      id: faker.datatype.number(),
      category: {
        id: dto.categoryId,
        name: faker.commerce.department(),
        image: faker.image.imageUrl(),
      }
    }
    return this.add(newProduct);
  }

  add(product: Product) {
    this.products.push(product);
    return product;
  }

  update(id: Product['id'], changes: UpdateProductDto ) {
    const index = this.products.findIndex(item => item.id === id);
    const prevData = this.products[index];
    this.products[index] = {
      ...prevData,
      ...changes
    }
    return this.products[index];
  }

  findOne(id: Product['id']) {
    return this.products.find(product => product.id === id);
  }
}