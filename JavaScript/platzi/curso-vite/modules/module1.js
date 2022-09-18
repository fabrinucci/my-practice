const module = {
  name: 'module number 1'
}

export function load() {
  console.log(`${module.name} loaded!`);
}

export default module