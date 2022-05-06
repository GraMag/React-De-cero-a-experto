import { getHeroById } from "./bases/08-imp-exp";

// const promesa = new Promise((resolve, reject) => {
//    setTimeout(() => {
//        const hero = getHeroById(2);
//       resolve(hero); 
//       //reject('No se pudo encontrar el heroe')
//    }, 2000);  
// });

// promesa.then((hero) => {
//     console.log('Heroe', hero);
// })
// .catch(err => console.warn(err));

const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id);
            (hero) ?
             resolve(hero)
            :reject('No se pudo encontrar el heroe');
        }, 2000);  
    });
}

getHeroByIdAsync(2)
    .then(console.log)
    .catch(console.warn);