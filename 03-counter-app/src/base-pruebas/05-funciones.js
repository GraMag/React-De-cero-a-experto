const saludar = function(nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

// console.log(saludar( 'Maggie'));
// console.log(saludar2('Maggie'));
// console.log(saludar3('Maggie'));

export const getUser = () => ({
        id: 'ABC123',
        username: 'TortugaNinja'
})
    
//console.log(getUser());

///Tarea
///1. Transformar en funcion de flecha
///2. Retornar objeto implicito
///3. Probar
export const getUsuarioActivo = (nombre) => 
    ({
        uid: 'QWE123',
        username: nombre
    });

const usuarioActivo = getUsuarioActivo('Robert');
//console.log(usuarioActivo);