import { getHeroById } from "./08-imp-exp";


export const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id);
            (hero) ?
             resolve(hero)
            :reject('No se pudo encontrar el heroe');
        }, 1500);  
    });
}
