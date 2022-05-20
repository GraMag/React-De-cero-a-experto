const personajes = ['Ash', 'Misty', 'Brook'];
const[, p2] = personajes;

export const retornaArreglo = () => {
    return['ABC', 123];
}

const [letras, numeros] = retornaArreglo();

// Tarea
const usingState = (valor) => {
    return [valor, () => {console.log('Hola Mundo')}];
}

const [nombre, setNombre] = usingState('Pikachu');

setNombre();



