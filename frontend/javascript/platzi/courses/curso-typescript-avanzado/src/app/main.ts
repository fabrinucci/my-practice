import { faker } from "@faker-js/faker";
import { addProduct, products, updateProduct, findProducts } from './products/product.service';

for (let index = 0; index < 50; index++) {
  addProduct({
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    size: faker.helpers.arrayElement(["M", "S", "L", "XL"]),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElement(),
    price: parseInt(faker.commerce.price()),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    categoryId: faker.datatype.uuid(),
  });
}

console.log(products);
const product = products[0];

updateProduct(product.id, {
  title: 'Nuevo producto',
  price: 500,
})

findProducts({
  title: 'Casim',
  id: '4rf74wer',
  isNew: true,
  tags: ['sf', 'per']
})