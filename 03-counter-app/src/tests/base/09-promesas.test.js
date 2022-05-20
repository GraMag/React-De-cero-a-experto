import { getHeroByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from "../../data/heroes";

describe('Prueba con promesas', () =>{
    test('getHeroByIdAsync debe retortar un heroe async',(done) =>{
        const id = 1;
        getHeroByIdAsync(id).then(heroe =>{
            expect(heroe).toBe(heroes[0]);
            done();
        })
    }); 

    test('getHeroByIdAsync debe retortar "No se pudo encontrar el heroe"',(done) =>{
        const id = 10;
        getHeroByIdAsync(id).catch(error =>{
            // eslint-disable-next-line jest/no-conditional-expect
            expect(error).toBe('No se pudo encontrar el heroe');
            done();
        })
    }); 
})