import '@testing-library/jest-dom'
import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Prueba en 02-template-string', () => {
    test('getSaludo debe retortar Buenos días Maggie', () =>{
        const nombre = 'Maggie';
        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Buenos días Maggie');
    });

    test('getSaludo debe retortar Buenos días mundo', () =>{
        const saludo = getSaludo();

        expect(saludo).toBe('Buenos días mundo');
    })
});