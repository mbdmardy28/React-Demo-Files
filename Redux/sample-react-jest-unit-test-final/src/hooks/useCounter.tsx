import { useState } from "react";

export interface Counter {
    count: number,
    increment: () => void
}

const useCounter = ():Counter => {
    const [count, setCount] = useState(0)

    const increment = () => setCount(x => x + 1);

    return { count, increment}
}

export default useCounter