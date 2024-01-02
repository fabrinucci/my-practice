const sumar = (a: number, b: number): number => {
  return a + b;
}

const contar = (heroes: string[]): number => {
  return heroes.length
}

const superHeroes: string[] = ['Flash', 'Arrow', 'Superman', 'Cyborg'];
contar(superHeroes);

const llamarBatman = (llamar: boolean = true): void => {
  if(llamar) {
    console.log('Batisenal');
  }
}

llamarBatman();

const unirHeroes = (...personas:string[]): string => {
  return personas.join(', ');
}

const noHaceNada = (numero: number, texto: string, booleano: boolean, arreglo: string[]) => {}

let noHaceNadaTmp: (n: number, s: string, b: boolean, a: string[]) => void;
noHaceNadaTmp = noHaceNada