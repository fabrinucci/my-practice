// function moneyBox(coins) {
//   let saveCoins = 0;
//   saveCoins += coins
//   console.log(`My actual money is: $${ saveCoins }`)
// }

// moneyBox(5);
// moneyBox(5);

function moneyBox() {
  let saveCoins = 0;
  function countCoins(coins) {
    saveCoins += coins;
    console.log(`Actual money: $${ saveCoins }`);
  }
  return countCoins;
}

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(5);
moneyBoxAna(8);
moneyBoxAna(26);

console.log('---');

const moneyBoxJuan = moneyBox();
moneyBoxJuan(6);
moneyBoxJuan(4);
moneyBoxJuan(9);


function mosaico() {
  const figuras = [];

  function pintar(nuevaFigura) {
    figuras.push(nuevaFigura);

    let resultado = '';
    const mainLength = figuras.length * 2;
    
    for (let fila = 0; fila < mainLength; fila++) {

      for(let columna = 0; columna < mainLength; columna++) {
        const valorMax = fila > columna ? fila : columna;
        const valorMin = fila < columna ? fila : columna;

        const valorPosible = mainLength - (valorMax + 1);

        const indexFigura = valorPosible < valorMin ? valorPosible : valorMin;
        

        resultado += `${figuras[indexFigura]} `;
      }
      resultado += '\n';
    }
    return resultado;
  }

  return pintar;

}

const m = mosaico();
console.log(m('*'));
console.log(m('o'));
console.log(m('+'));
console.log(m('x'));