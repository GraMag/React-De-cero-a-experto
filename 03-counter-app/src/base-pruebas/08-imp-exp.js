import heroes, { owners} from "../data/heroes";

export const getHeroById = (id) => heroes.find(heroes => heroes.id === id);
export const getHeroByOwner = (owner) => heroes.filter(heroes => heroes.owner === owner);


