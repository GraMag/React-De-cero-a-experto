import { getHeroById, getHeroByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes', () =>{
    test('Debe retornar un heroe', () =>{
        const id = 1;
        const heroe = getHeroById(id);
        const heroeData = heroes.find(h => h.id === id);
        expect(heroe).toEqual(heroeData);
    })

    test('Debe retornar undefined si no existe el heroe', () =>{
        const id = 10;
        const heroe = getHeroById(id);
        expect(heroe).toEqual(undefined);
    })

    test('Debe retornar un arreglo con los hereos de DC', () => {
        const owner = 'DC'
        const heroesDC = getHeroByOwner(owner);
        const heroeData = heroes.filter(h => h.owner === owner);
        expect(heroesDC).toEqual(heroeData);
    })

    test('Debe retornar el total de los heroes de Marvel', () => {
        const owner = 'Marvel'
        const heroesDC = getHeroByOwner(owner);
        expect(heroesDC.length).toBe(2);
    })
})