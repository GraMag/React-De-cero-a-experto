import { useEffect, useState } from "react"
import "./effects.css"
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const {name, email} = formState;

    useEffect ( () => {
        console.log('hey');
    }, [])


   useEffect ( () => {
        console.log('form cambio!');
    }, [formState])

    useEffect ( () => {
        console.log('email cambio!');
    }, [email])

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }
    return(
        <>
            <h1>useEffect</h1>
            <br/>
            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Nombre"
                    autoComplete="off"
                    value = {name}
                    onChange={handleInputChange}/>
                <br/>
            </div>
            <div>
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="E-mail"
                    autoComplete="off"
                    value = {email}
                    onChange={handleInputChange}
                />
            </div>
            {name && <Message/>}
        </>
    )
}