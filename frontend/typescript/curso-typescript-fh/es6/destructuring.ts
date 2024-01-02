(() => {

  type Avengers = {
    nick: string;
    ironman: string;
    spiderman: string;
    active: boolean;
    power: number;
}

  const avengers = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr',
    spiderman: 'Tobey Maguire',
    active: true,
    power: 1500
  }

  const { power, ironman } = avengers

  console.log(power, ironman.toUpperCase() );

  const printAvenger = ({ironman, ...rest}: Avengers) => {
    console.log(ironman, rest.nick);
  }

  printAvenger(avengers);


  const avengersArr: string[] = ['Cap. America', 'Hulk', 'Dr Strange'];

  const [ , hulk] = avengersArr;

  console.log({ hulk });
  

})();