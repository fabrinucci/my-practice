import axios from 'axios';
import { Product } from '../models/product.model';
import { ProductService } from '../models/product-service.model';
import { UpdateProductDto, CreateProductDto } from '../dto/product.dto';

export class ProductHttpService implements ProductService {

  private url = 'https://api.escuelajs.co/api/v1/products';

  async getAll() {
    const { data } = await axios.get<Product[]>(this.url);
    return data;
  }

  async update(id: Product['id'], changes: UpdateProductDto) {
    const { data } = await axios.put<Product[]>(`${this.url}/${id}`, changes);
    return data;
  }

  async create(dto: CreateProductDto) {
    const { data } = await axios.post<Product[]>(this.url, dto);
    return data;
  }

  async findOne(id: Product['id']) {
    const { data } = await axios.get<Product[]>(`${this.url}/${id}`);
    return data;
  }
}