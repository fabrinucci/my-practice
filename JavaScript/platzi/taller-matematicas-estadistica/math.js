
function calcularCuadrado(lado) {
  return {
    perimetro: lado * 4,
    area: lado * lado
  }
}
console.log(calcularCuadrado(5))

function calcularTriangulo(ladoA, ladoB, base, altura) {
  return {
    perimetro: ladoA + ladoB + base,
    area: (base * altura) / 2
  }
}

console.log(calcularTriangulo(6, 6, 4, 5.5));


function calcularCirculo(radio) {
  const diametro = radio * 2;
  const radioAlCuadrado = Math.pow(radio, 2)

  return {
    circunferencia: Math.PI * diametro,
    area: (Math.PI * radioAlCuadrado)
  }
}
console.log(calcularCirculo(5));


function calcularAlturaTrianguloIsosceles(lado,base) {
  if(lado === base) {
    return 'Este no es un triangulo isosceles'
  } else {
    return Math.sqrt( Math.pow(lado, 2) - ( Math.pow(base, 2) / 4 ), 2 )
  }
}
console.log(calcularAlturaTrianguloIsosceles(6, 6));

// Math.pow(numero, exponente-mult)
// Math.sqrt(numero, exponente-raiz)