const persona = {
    nombre:   'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zipcode: '1234',
        lat: 14.10232,
        long: 32.0302,
         
    }
};

console.log({persona});  
console.table(persona);  

const persona2 = {...persona};
persona2.apellido = 'Hawk';

console.log({persona});
console.log({persona2});
