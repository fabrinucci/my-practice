import { ProductMemoryService } from './services/product-memory.service';

const productService = new ProductMemoryService();

productService.create({
  title: 'Product 1',
  price: 152,
  description: 'Test product 1',
  images: [],
  categoryId: 12,
});

const products = productService.getAll();
const productId = products[0].id;

console.log(productService.getAll());

productService.update(productId, {
  title: 'Update Product title',
  price: 10000
})

const rta = productService.findOne(productId)

console.log(rta);
