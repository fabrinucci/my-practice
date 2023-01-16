import { ProductHttpService } from './services/product-http.service';
import { faker } from '@faker-js/faker';

( async () => {
  const productsService = new ProductHttpService();
  
  const products = await productsService.getAll();
  // console.log(products);

  console.log( await productsService.findOne(25))

  // const newProduct = await productsService.create({
  //   title: 'Beautiful Red Glasses',
  //   categoryId: 5,
  //   price: 525,
  //   description: 'Red glasses to use in any place you visit',
  //   images: [faker.image.imageUrl()]
  // })

    const update = await productsService.update(243, {
      title: 'MUCHACHOS',
      categoryId: 10,
      images: ['https://www.elgrafico.com.ar/media/cache/pub_news_details_large/media/i/53/fa/53facf1963a1053df0b35ebb8ce8a865706782d9.jfif'],
      price: 788622,
      description: 'Ya ganamos la tercera, ya somos campeón mundial'
    })

    // const update = await productsService.update(244, {
    //   description: 'Red glasses to wear everywhere'
    // })

  console.log(update);
  

})();
