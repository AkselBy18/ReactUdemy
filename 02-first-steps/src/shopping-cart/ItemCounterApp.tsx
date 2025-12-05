/* PROPS => values for component (mutable and variable) */

import { useState } from "react";


//import './itemCounter.css';
import style from './itemCounter.module.css';


/* HOOKS => Functions for control state */
interface ItemCounterProps {
    name: string;
    quantity: number | undefined;
}

export function ItemCounterApp({name, quantity}: ItemCounterProps) {
    const [count, setCount] = useState(quantity ?? 0);
    
    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleSubtract = () => {
        if (count === 1) return;
        setCount(count - 1);
    }
    
    return (
        <section className={style['item-row']}>
            <span
                className={style['item-text']}
                style={{
                    color: count === 1 ? 'red' : 'black'
                }}>
                {name}
            </span>
            <button
                onClick={handleAdd}
            >+1</button>
            <span>{count}</span>
            <button
            onClick={handleSubtract}
            >-1</button>
        </section>
    )
}
