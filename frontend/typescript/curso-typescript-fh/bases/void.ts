(() => {

  function callBatman() :void {
    return;
  }

  const callSuperman = () :void => {
    return;
  }

  const a = callBatman()
  const b = callSuperman()
  console.log(a); // undefined
  console.log(b); // undefined

})()