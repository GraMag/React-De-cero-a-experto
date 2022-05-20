const nombre   = 'Mirabel';
const apellido = 'Madrigal';

const nombreCompleto = `${nombre} ${apellido}`;


export function getSaludo(nombre = 'mundo'){
    return 'Buenos días ' + nombre;
}

