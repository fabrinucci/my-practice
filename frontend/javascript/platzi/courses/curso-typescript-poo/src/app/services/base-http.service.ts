import axios from 'axios';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';
import { UpdateProductDto } from '../dto/product.dto';

const URL = 'https://api.escuelajs.co/api/v1';

export class BaseHttpService<TypeClass> {
  // data: TypeClass[] = [];

  constructor(
    private url: string
  ) {}

  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }

  async update<ID, DTO>(id: ID, changes: DTO) {
    // const array: TypeClass[] = []
    const { data } = await axios.put<Product[]>(`${this.url}/${id}`, changes);
    return data;
  }

}

( async () => {

  const products = new BaseHttpService<Product>(`${URL}/products`);
  const rta = await products.getAll();
  console.log(rta);

  products.update<Product['id'], UpdateProductDto>(1, {
    title: 'Mi nuevo titulo'
  })
  
  const categories = new BaseHttpService<Category>(`${URL}/categories`);
  const rta2 = await categories.getAll();
  console.log(rta2);  
  
})()