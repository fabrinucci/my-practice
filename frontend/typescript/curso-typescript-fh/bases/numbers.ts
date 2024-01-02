(() => {
  let productPrice = 54;
  productPrice = 12;
  console.log({productPrice});

  let productInStock: number;

  let discount = parseInt('22')
  console.log(discount);
  if(discount <= 200) {
    console.log('Apply');
  } else {
    console.log('Not Apply');
  }
  
  let hex = 0xfff
  let bin = 0b1001
  console.log({hex});
  console.log({bin});
  
})();