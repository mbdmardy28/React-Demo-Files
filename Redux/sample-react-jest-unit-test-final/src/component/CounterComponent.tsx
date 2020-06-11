import React, { useEffect } from "react";
import useCounter from "../hooks/useCounter";

interface Props {
    onCountChange: (count: number) => void
}
const CounterComponent: React.FC<Props> = ({onCountChange}) => {
    const {count, increment} = useCounter();

    useEffect(() => {
        onCountChange(count);
    })

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => increment()}>
                Increment
            </button>
        </div>
    )
}

export default CounterComponent;