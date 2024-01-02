class Product {
  private id: number;
  private name: string;
  private cost: number;

  constructor(id: number, name: string, cost: number) {
    this.id = id;
    this.name = name;
    this.cost = cost;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getCost() {
    return this.cost;
  }
}

class ShoppingCart {
  private static instance: ShoppingCart;
  private cart: Product[] = [];

  private constructor() {}

  getCart() {
    return this.cart;
  }

  add(product: Product) {
    this.cart.push(product);
  }

  deleteById(id: number) {
    this.cart = this.cart.filter((prod) => prod.getId() !== id);
  }

  static getInstance() {
    if (!this.instance) this.instance = new ShoppingCart();
    return this.instance;
  }
}

(() => {
  const cart = ShoppingCart.getInstance();
  const cart2 = ShoppingCart.getInstance();
  const prod1 = new Product(1, 'mate', 3000);
  const prod2 = new Product(2, 'bombilla', 2900);
  const prod3 = new Product(3, 'matera', 2400);

  // agregamos products al cart
  cart.add(prod1);
  cart.add(prod2);
  cart.add(prod3);

  console.log(cart.getCart());

  // borramos por id
  cart.deleteById(2);

  console.log(cart.getCart());

  // verificamos que ambos cart tienen la misma instancia, por tanto ambos tienen los mismos products
  console.log(cart === cart2);
  console.log(cart.getCart());
  console.log(cart2.getCart());
})();
