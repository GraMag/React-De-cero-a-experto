import { getUser, getUsuarioActivo } from '../../base-pruebas/05-funciones'

describe('Prueba en 05-funciones', () =>{
    test('Debe retornar un objeto', () =>{
        const userTest = {
            id: 'ABC123',
            username: 'TortugaNinja'
        }

        const user = getUser()

        expect(userTest).toEqual(user);

    });

    test('Debe retornar un objeto con parametros', () =>{

        const user = getUsuarioActivo('Ramoncito')

        expect(user).toEqual({
            uid: 'QWE123',
            username: 'Ramoncito'
        });

    })
})