const nombre   = 'Mirabel';
const apellido = 'Madrigal';

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Buenos días ' + nombre;
}

console.log(`${getSaludo(nombre)}!`);
