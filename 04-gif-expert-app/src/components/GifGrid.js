import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({category}) => {
    const [images, setImagenes] = useState([]);

    useEffect(() => {
        getGifs(category)
            .then(setImagenes);
    }, [category]); 


    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>
                <ol>
                    {
                        images.map(img => (
                            <GifGridItem 
                            key = {img.id}
                            {...img}/>
                        ))
                    }
                </ol>
            </div>
        </>
    )
}