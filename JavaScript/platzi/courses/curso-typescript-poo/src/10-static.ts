console.log('Math.PI =', Math.PI);
console.log('Math.max =', Math.max(1,2,2,5,7,8,6,4));

class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => max >= item ? max : item)
  }
}

console.log('MyMath.PI =', MyMath.PI);
console.log('MyMath.max =', MyMath.max(4,4,56,8,415,1,2));
const numbers = [15, 174, 35, 2, 89, 141, 50]
console.log('MyMath.max =', MyMath.max(...numbers));
console.log('MyMath.max =', MyMath.max(-60, -8, -15, -10));

