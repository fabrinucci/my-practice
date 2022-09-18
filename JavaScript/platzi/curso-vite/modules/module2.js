const module = {
  name: 'module number 2'
}

export function load() {
  console.log(`${module.name} loaded!`);
}

export default module