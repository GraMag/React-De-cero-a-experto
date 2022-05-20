import PrimeraApp from "../PrimeraApp"
import {render} from "@testing-library/react"

describe('Prueba en PrimeraApp.js', ()=>{
    test('Debe mostrarse "Hola, soy Goku"', () => {
        const saludo = 'Hola, soy Goku';
        const {getByText} = render(<PrimeraApp saludo = {saludo}/>);
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByText(saludo)).toBeInTheDocument();
    })
})