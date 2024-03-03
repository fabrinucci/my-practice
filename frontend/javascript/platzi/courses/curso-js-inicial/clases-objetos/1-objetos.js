const persona = {
  nombre: 'John',
  edad: 30,
  direccion: { calle: 'Av Insurgentre 187', ciudad: 'CDMX' },
  saludar() {
    console.log(`hola, mi nombre es ${persona.nombre}`);
  },
};

console.log(persona);
console.log(persona.nombre); // John
persona.saludar();
persona.telefono = '555-555-5555';
console.log(persona.telefono); // 555-555-5555

persona.despedir = () => {
  console.log('Adios');
};

persona.despedir(); // Adios
console.log(persona.direccion.calle); // Av Insurgentre 187
delete persona.telefono;
delete persona.despedir;
