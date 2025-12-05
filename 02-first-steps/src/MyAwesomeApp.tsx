import type { CSSProperties } from "react";

const name = 'Aksel';
const lastName = 'Herrera';

const favoriteGames = ['Gta V', 'Fifa 07', 'Fornite'];
const isActive = false;

const address = {
    zipCode: '12345',
    country: 'Mexico'
}

const myStyle: CSSProperties = {
    backgroundColor: 'gray',
    borderRadius: 20,
    padding: 10,
    marginTop: 30,
}

export function MyAwesomeApp() {
    return (
        <>
            <h1>{name}</h1>
            <h3>{lastName}</h3>

            <p>{favoriteGames.join(', ')}</p>
            <h1>{isActive ? 'Active' : 'Inactive'}</h1>
            <p
            style={myStyle}
            >{JSON.stringify(address)}
            </p>
        </>
    )
}    