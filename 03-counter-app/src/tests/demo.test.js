describe('Prueba en el archivo demo.test.js', () => {
    test('deben ser iguales', () =>{
        //Arrange
        const mensaje1 = 'Hola mundo';
        const mensaje2 = 'Hola mundo';
    
        //Act
        expect(mensaje1).toBe(mensaje2); 
    } )
} );
