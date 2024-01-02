

(() =>{

  interface Hero {
    name: string;
    realName: string;
  }
  
  interface Villian {
    name: string;
    dangerLevel: number;
  }
  
  function genericFc<T>(argument: T): T {
    return argument;
  }
  
  const deadpool = {
    name: 'Deadpool',
    realName: 'Wilson',
    dangerLevel: 100,
  }
  
  console.log(genericFc<Hero>(deadpool).realName);
})()