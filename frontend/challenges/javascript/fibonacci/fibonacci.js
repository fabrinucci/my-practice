
// Fibonacci

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
// n = posiciones en el array

//* Manera Recursiva 

const fibonacci = (n) => {
  if (n < 2) return n;
  return fibonacci( n - 2) + fibonacci(n - 1);
}

/*
console.log(fibonacci(0)) // 0
console.log(fibonacci(1)) // 1
console.log(fibonacci(2)) // 1
console.log(fibonacci(3)) // 2
console.log(fibonacci(4)) // 2
console.log(fibonacci(5)) // 5
console.log(fibonacci(6)) // 8
console.log(fibonacci(7)) // 13
console.log(fibonacci(8)) // 21
console.log(fibonacci(9)) // 34
console.log(fibonacci(10)) // 55
console.log(fibonacci(15)) // 610
console.log(fibonacci(20)) // 6765
console.log(fibonacci(25)) // 75025
console.log(fibonacci(30)) // 832040

*/

// - No recursiva -- Mucho mas optimizado

const fibo = (n) => {
  const data = [0, 1];

  for( let i = 2; i <= n; i++ ) {
    data[i] = data[i - 2] + data[i - 1];
  } 
  return data[n]
}

console.log(fibo(0))
console.log(fibo(1))
console.log(fibo(2))
console.log(fibo(3))
console.log(fibo(4))
console.log(fibo(5))
console.log(fibo(6))
console.log(fibo(8))


