import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Pokemon', 'Shaman King', 'Sakura Card Captor']);

    // const handleAdd = () => {
    //     setCategories([...categories, 'Digimon']);
        
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories}/>
            <hr/>

            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {categories.map((category) => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
        </>
    )
}