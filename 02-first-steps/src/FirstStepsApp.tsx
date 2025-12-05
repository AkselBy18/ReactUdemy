import { ItemCounterApp } from "./shopping-cart/ItemCounterApp";

interface ItemInCart {
    productName: string;
    quantity: number;
}

const itemsInCart: ItemInCart[] = [
    { productName: 'Nintento Switch 2', quantity: 3 },
    { productName: 'Pro controler', quantity: 1 },
    { productName: 'PS2 512GB', quantity: 2 },
]

/* THIS IS A COMPONENT */
export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de compras</h1>
            {
                itemsInCart.map(({ productName, quantity }) => (
                    <ItemCounterApp
                        key={productName}
                        name={productName}
                        quantity={quantity} />
                ))
            }
        </>
    );
}

/* <ItemCounterApp
                name="Nintento Switch 2"
                quantity={3}/>
            <ItemCounterApp
                name="Pro controler"
                quantity={1}/>
            <ItemCounterApp
                name="PS2 512GB"
                quantity={2}/> */

/* 

<h1>Hello Word!!</h1>
            <p>I am Aksel!!</p>

            <button>Click me</button>
            <div>
                <h2>Hello inside div</h2>
            </div>
*/