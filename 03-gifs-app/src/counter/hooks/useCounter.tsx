import { useState } from "react";

export function useCounter(initialValue: number = 10) {
    const [counter, setCounter] = useState(initialValue);

    const handleAdd = () => {
        setCounter(counter + 1);
    };

    const handleSubtract = () => {
        setCounter(prevState => prevState - 1);
    }

    const handleReset = () => {
        setCounter(initialValue);
    }

    return {
        //PROPS - VALUES
        counter,
        //METHODS - ACTIONS
        handleAdd,
        handleSubtract,
        handleReset
    }
}
