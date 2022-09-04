const myGlobal = 0;

function myFunction() {
  const myNumber = 1;
  console.log(myGlobal); // 0

  function myParent() {
    const inner = 2;
    console.log(myNumber, myGlobal); // 1 0

    function myChild() {
      console.log(inner, myNumber, myGlobal) // 2 1 0
    }

    return myChild();
  }

  return myParent();
}

myFunction();