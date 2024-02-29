// Definición de una función que calcula el precio con descuento
function calculateDiscountPrice(price, discountPercentage) {
  // Calcula el monto del descuento
  const discount = (price * discountPercentage) / 100;

  // Calcula el precio con descuento restando el descuento del precio original
  const priceWithDiscount = price - discount;

  // Devuelve el precio con descuento
  return priceWithDiscount;
}

// Declaración de variables
const originalPrice = 100; // Precio original antes del descuento
const discountPercentage = 20; // Porcentaje de descuento a aplicar

// Llamada a la función para calcular el precio con descuento
const finalPrice = calculateDiscountPrice(originalPrice, discountPercentage);

// Imprime en la consola un objeto con las variables relevantes
console.log('El precio original es: ' + originalPrice); // Precio original
console.log('El porcentaje de descuento es: ' + discountPercentage + '%'); // Porcentaje de descuento
console.log('El precio con descuento es: ' + finalPrice); // Precio final después del descuento
