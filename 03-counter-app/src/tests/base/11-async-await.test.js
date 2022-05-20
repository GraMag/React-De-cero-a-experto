import { getImage } from "../../base-pruebas/11-async-await"

describe('Pruebas con async await fetch', () => {
    test('debe retornar una imagen', async() =>{
        const url = await getImage();
        expect(typeof url).toBe('string');
    })
})