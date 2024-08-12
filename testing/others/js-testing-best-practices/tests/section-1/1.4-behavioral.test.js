const sinon = require('sinon');

class ProductService {
  // este método es usado solo internamente
  // Cambiarle el nombre causará que el test falle
  calculateVATAdd(priceWithoutVAT) {
    return { finalPrice: priceWithoutVAT * 1.2 };
    // Cambiar el formato de salida o nombre de la clave a continuación hará que el test falle
  }

  // método público
  getPrice(productId) {
    const desiredProduct = DB.getProduct(productId);
    const finalPrice = this.calculateVATAdd(desiredProduct.price).finalPrice;
    return finalPrice;
  }
}

// Testeando la implementación interna
it('White-box test: When the internal methods get 0 VAT, it returns 0 response', async () => {
  //! No hay ningún requisito para permitir a los usuarios calcular el IVA, solo existe el de mostrar el precio final al usuario. Sin embargo, falsamente insistimos en testear las partes privadas de la clase.
  expect(new ProductService().calculateVATAdd(0).finalPrice).to.equal(0);
});

//$ Mejor enfoque: Testing de comportamiento
it('Behavioral test: When a product with a given ID is fetched, the final price is calculated correctly', async () => {
  // Mockear la base de datos para devolver un producto con un precio específico
  const mockProduct = { id: 1, price: 100 };
  sinon.stub(DB, 'getProduct').returns(mockProduct);

  // Testear el método público `getPrice`
  const productService = new ProductService();
  const finalPrice = productService.getPrice(1);

  // Verificar que el precio final es el correcto
  expect(finalPrice).to.equal(120); // 100 * 1.2 = 120

  // Restaurar el stub
  DB.getProduct.restore();
});
