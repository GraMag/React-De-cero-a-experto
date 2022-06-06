import { useCounter } from "../../hooks/useCounter"
import "./counter.css"
export const CounterWithCustomHooks = () => {
    const {state, increment, decrement, reset} = useCounter()
    return (
        <>
            <h1>Counter with hooks: {state}</h1>
            <hr/>
            <button className="btn btn-primary"
            onClick={() => increment(2)}>+1</button>
            <button className="btn"
            onClick={reset}>reset</button>
            <button className="btn"
            onClick={() => decrement(2)}>-1</button>
        </>
    )
}