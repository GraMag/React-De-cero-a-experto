// Desestructuracion

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

const { nombre, edad, clave } = persona;
console.log(nombre);
console.log(edad);
console.log(clave);

const retornaPersona = (usuario) => {
    console.log({persona});
};

retornaPersona(persona);

const usingContext = ({clave, nombre, edad, rango = 'Capitan'}) => {
    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12.4252,
            lng: -42.3010
        }
    }
    
};
 
const {nombreClave, anios, latlng: {lat, lng}} = usingContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);
