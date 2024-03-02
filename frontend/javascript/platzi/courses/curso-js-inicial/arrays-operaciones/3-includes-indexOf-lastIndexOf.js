// includes() with numbers

const numbers = [1, 2, 3, 4, 5];

const result1 = numbers.includes(3);
console.log(result1);

const result2 = numbers.includes(8);
console.log(result2);

// indexOf()

const fruits = ['apple', 'cherry', 'grape', 'mango'];

const index1 = fruits.indexOf('grape');
console.log(index1);

const index2 = fruits.indexOf('blueberry');
console.log(index2);

// lastIndexOf()

const numbersAgain = [2, 4, 6, 8, 10, 6];

const lastIndex1 = numbersAgain.lastIndexOf(6);
console.log(lastIndex1);

const lastIndex2 = numbersAgain.lastIndexOf(3);
console.log(lastIndex2);

// Exercise Â· Findind Substring Indices

const stringArray = ['apple', 'banana', 'orange', 'grape', 'banana', 'kiwi'];
const target = 'banana';

function findStringIndicesInArray(array, target) {
  const result = {
    includesTargetString: false,
    firstOccurrenceIndex: -1,
    lastOccurrenceIndex: -1,
  };

  array.forEach((element, index) => {
    if (element.includes(target)) {
      result.includesTargetString = true;
      result.firstOccurrenceIndex = array.indexOf(target);
      result.lastOccurrenceIndex = array.lastIndexOf(target);
    }
  });

  return result;
}

const result = findStringIndicesInArray(stringArray, target);
console.log(result);
