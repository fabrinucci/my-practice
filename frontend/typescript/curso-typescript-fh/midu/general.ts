//* never
// const errorMsg = (message: string): never => {
//   throw new Error(message);
// };

//* Type Alias

// type Hero = {
//   name: string;
//   age: number;
// };

// let hero: Hero = {
//   name: 'Thor',
//   age: 1500,
// };

// function createHero(hero: Hero): Hero {
//   const { name, age } = hero;
//   return { name, age };
// }

// const thor = createHero({ name: 'Thor', age: 1500 });

//* Optional Properties
type Uuid = `${string}-${string}-${string}-${string}-${string}`;

type Hero = {
  readonly id?: Uuid;
  name: string;
  age: number;
  isActive?: boolean;
};

let hero: Hero = {
  name: 'Thor',
  age: 1500,
};

function createHero(hero: Hero): Hero {
  const { name, age } = hero;
  return { id: crypto.randomUUID(), name, age, isActive: true };
}

const thor = createHero({ name: 'Thor', age: 1500 });
// thor.id = 1534134; cannot assign to 'id' because it is a read-only property

type SuperHero = Hero & {
  power: string[];
};

interface SuperHero2 extends Hero {
  superPower: string[];
}

const batman: SuperHero = {
  id: crypto.randomUUID(),
  name: 'Batman',
  age: 38,
  isActive: true,
  power: ['Plane', 'Gadget skills'],
};

const superman: SuperHero2 = {
  id: crypto.randomUUID(),
  name: 'Batman',
  age: 38,
  isActive: true,
  superPower: ['Super force', 'Fly', 'Red light'],
};

type SmallHero = Omit<SuperHero, 'age' | 'power'>;

interface SmallHero2 extends Omit<SuperHero2, 'age' | 'superPower'> {}

const catWoman: SmallHero = {
  id: crypto.randomUUID(),
  name: 'Catwoman',
};

const catWoman2: SmallHero2 = {
  id: crypto.randomUUID(),
  name: 'Catwoman',
};

//* Enums
//$ En javascript
// const ERROR_TYPES = {
//   NOT_FOUND: 'notFound',
//   UNAUTHORIZED: 'unauthorized',
//   FORBIDDEN: 'forbidden',
// };
// const viewMessage = (errorType) => {
//   if (errorType === ERROR_TYPES.NOT_FOUND) {
//     console.log('Resource not found');
//   }
//   if (errorType === ERROR_TYPES.UNAUTHORIZED) {
//     console.log('You are not allowed to access');
//   }
//   if (errorType === ERROR_TYPES.FORBIDDEN) {
//     console.log('You are not allowed to access');
//   }
// };

//$ En typescript
const enum ERROR_TYPES {
  NOT_FOUND,
  UNAUTHORIZED,
  FORBIDDEN,
} // normalmente utilizamos const antes de un enum

const viewMessage = (errorType: ERROR_TYPES) => {
  if (errorType === ERROR_TYPES.NOT_FOUND) {
    console.log('Resource not found');
  }
  if (errorType === ERROR_TYPES.UNAUTHORIZED) {
    console.log('You are not allowed to access');
  }
  if (errorType === ERROR_TYPES.FORBIDDEN) {
    console.log('You are not allowed to access');
  }
};

//* Aserciones de tipos
// const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const canvas = document.getElementById('canvas');

if (canvas !== null) {
  const ctx = (canvas as HTMLCanvasElement).getContext('2d');
}

if (canvas instanceof HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
}

// typeof -> Tipos (string, boolean, number, Date)
// instanceof -> Instancias

//* Type Guards // siempre que se puede evitarlos
interface Mario {
  name: string;
  jump: () => void;
}

interface Sonic {
  name: string;
  run: () => void;
}

type Character = Mario | Sonic;

const checkIsSonic = (character: Character): character is Sonic => {
  return (character as Sonic).run !== undefined;
};

const play = (character: Character) => {
  if (checkIsSonic(character)) {
    console.log(character.run());
  }
};
