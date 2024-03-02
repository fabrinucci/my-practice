const stringArray = ['apple', 'banana', 'orange', 'grape', 'banana', 'kiwi'];
const target = 'banana';

const findTarget = (arr, target) => {
  const firstIndex = arr.indexOf(target);
  const lastIndex = arr.lastIndexOf(target);

  if (firstIndex === -1 && lastIndex === -1) return -1;
  return [].concat(firstIndex, lastIndex);
};

console.log(findTarget(stringArray, target));
