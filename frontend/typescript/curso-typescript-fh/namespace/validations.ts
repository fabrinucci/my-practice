
namespace Validations {

  export const validateText = (name: string): boolean  => {
    return (name.length <= 3) ? false : true; 
  }

  export const validateDate = (myDate: Date): boolean  => {
    return ( isNaN(myDate.valueOf()) ) ? false : true; 
  }

}

console.log(Validations.validateText('Pepe'));
// console.log(Validations.validateDate(454);