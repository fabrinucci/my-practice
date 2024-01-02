(() => {
  const hero: string = 'Flash';

  function getHero(): string {
    return hero;
  }

  const activateBati = (): string => {
    return 'Batisignal activate';
  }

  console.log(typeof activateBati);
  
  const heroName = getHero();

})()