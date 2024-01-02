import { Product } from '../models/product.model';
import { BaseHttpService } from './base-http.service';
import { UpdateProductDto } from '../dto/product.dto';

export class ProductCrudService {
  private url = 'https://api.escuelajs.co/api/v1/products';
  private http = new BaseHttpService<Product>(this.url);

  async update(id: Product['id'], dto: UpdateProductDto) {
    // permisos
    // logica
    return this.http.update(id, dto)
  }
}