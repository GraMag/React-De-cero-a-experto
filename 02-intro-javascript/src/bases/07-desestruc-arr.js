const personajes = ['Ash', 'Misty', 'Brook'];
const[, p2] = personajes;
console.log(p2);

const returnaArreglo = () => {
    return['ABC', 123];
}

const [letras, numeros] = returnaArreglo();
console.log(letras, numeros);

// Tarea
const usingState = (valor) => {
    return [valor, () => {console.log('Hola Mundo')}];
}

const [nombre, setNombre] = usingState('Pikachu');

console.log(nombre);
setNombre();