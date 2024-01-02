(() => {

  const fullName = (firstName: string, lastName?: string, upper: boolean = false): string => {

    if(upper) {
      return `${firstName.toUpperCase()} ${lastName?.toUpperCase() || '---'}`
    } else {
      return `${firstName} ${lastName || '---'}`
    }
  }

  const name = fullName('Vito');
  const name2 = fullName('Vito', 'Scaleta');
  const name3 = fullName('Vito', 'Scaleta', true);


  console.log({name});
  console.log({name2});
  console.log({name3});

})();