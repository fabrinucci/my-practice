
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