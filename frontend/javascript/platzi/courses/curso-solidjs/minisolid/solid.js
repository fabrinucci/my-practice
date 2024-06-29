export const createSignal = (value) => {
  const state = () => {
    console.log('state: ' + value);
    return value;
  };

  const setState = (newValue) => {
    if (typeof newValue === 'function') {
      newValue = newValue(value);
    }
    console.log('setState: ' + newValue);
    value = newValue;
  };

  return [state, setState];
};
