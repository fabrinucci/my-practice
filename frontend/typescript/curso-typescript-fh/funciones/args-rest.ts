(() => {

  const fullName = (firstName: string, ...restArgs: string[] ): string => {
    return `${firstName} ${restArgs.join(' ')}`
  }

  const name = fullName('Jose', 'Luis', 'Garcia', 'Quevedo');
  console.log({name});

})();