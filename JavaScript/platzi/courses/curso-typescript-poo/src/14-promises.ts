import axios from "axios";

(async () => {

  const API = 'https://api.escuelajs.co';
  
  function delay(time: number) {
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true)
      }, time);
    });
    return promise;
  }

  const getProducts = async () => {
    const res = await axios.get(`${API}/api/v1/products`);
    return res.data;
  }

  console.log('-------------');
  const rta = await delay(3000);
  console.log(rta);
  
  console.log('-------------');
  const products = await getProducts();
  console.log(products);
  
})()