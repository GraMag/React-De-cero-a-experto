import heroes, { owners} from "../data/heroes";
// console.log(owners);
 
export const getHeroById = (id) => heroes.find(heroes => heroes.id === id);

// console.log(getHeroById(2));

const getHeroByOwner = (owner) => heroes.filter(heroes => heroes.owner === owner);

// console.log(getHeroByOwner('DC'));
