export interface User {
    id: number;
    name: string;
    location: string;
    role: string;
}


export const getUser = async(id: number): Promise<User> => {
    console.log('Función llamada');
    
    await new Promise((res) => setTimeout(res, 2000));

    console.log('Funcion resuelta');
    
    return {
        id: id,
        name: 'Aksel Akemi Herrera',
        location: 'Tepic Nayarit',
        role: 'Programer'
    }
}