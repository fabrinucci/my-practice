(() => {

  const fullName = (firstName: string, lastName: string): string => {
    return `${firstName} ${lastName}`
  }

  const name = fullName('Vito', 'Scaletta');
  console.log({name});

})();