/*
1 -> I
4 -> IV
5 -> V
9 -> IX
10 -> X
40 -> XL
50 -> L
90 -> LC
100 -> C
400 -> CD
500 -> D
900 -> CM
1000 -> M
*/

const selector = document.querySelector('#id');

const convertIntegerToRoman = (number) => {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = ['M', 'CM', 'D','CD', 'C', 'LC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  let result = '';

  values.forEach( ( value, index ) => {
    while( number >= value && number < 4000 ) {
      number -= value;
      result += roman[index];
    }
  })

  if( number >= 4000 ) {
    return (
      selector.innerHTML = 
      `
      <h4 class="p-5">
        Your number <strong>${ number }</strong> is not a valid number
      </h4>`
    )
  } else {
    return (
      selector.innerHTML = 
      `
      <h4 class="p-5">
        Your Roman Numeral is: <strong>${ result }</strong>
      </h4>`
    )
  }
} 

// convertIntegerToRoman(42); //Output: XLII
// convertIntegerToRoman(564); //Output: DLXIV
convertIntegerToRoman(3999); //Output: MMMCMLCIX
// convertIntegerToRoman(4000); //Output: Invalid
// convertIntegerToRoman(86522); //Output: Invalid