import { useState } from "react"
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks"

export const ExampleRef = () => {
    const [show, setShow] = useState(false);

    return(
        <div>
            <h1>Example Ref</h1>
            <hr/>
            {show && <MultipleCustomHooks/>}
            <button className="btn btn-primary mt-5"
                    onClick = { () => {setShow(!show)}}
                >Show!/Hide</button>
        </div>

    )
}