"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (name) => {
        return (name.length <= 3) ? false : true;
    };
    Validations.validateDate = (myDate) => {
        return (isNaN(myDate.valueOf())) ? false : true;
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText('Pepe'));
//# sourceMappingURL=main.js.map