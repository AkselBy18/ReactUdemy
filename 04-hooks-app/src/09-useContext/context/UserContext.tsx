import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import { users, type User } from "../data/user-mock.data";

type AuthStatus = 'checking' | 'authenticated' | 'no-authenticated';

interface UserContextProps {
    //state
    authStatus: AuthStatus;
    isAuthenticated: boolean;
    user: User | null;

    //methods
    login: (userId: number) => boolean;
    logout: () => void;
}

export const UserContext = createContext({} as UserContextProps);

//HIGH ORDER COMPONENT
export const UserContextProvider = ({ children }: PropsWithChildren) => {

    const [authStatus, setAuthStatus] = useState<AuthStatus>('checking')
    const [user, setUser] = useState<User | null>(null);

    const handleLogin = (userId: number): boolean => {
        const user = users.find(user => user.id === userId);
        if (!user) {
            console.log('User not found', userId);
            setUser(null);
            setAuthStatus('no-authenticated');
            return false;
        }

        setUser(user);
        setAuthStatus('authenticated');
        localStorage.setItem('userId', userId.toString());
        return true;
    }

    const handleLogout = () => {
        setAuthStatus('no-authenticated');
        setUser(null);
        localStorage.removeItem('userId');
    }

    useEffect(() => {
        const storageUserId = localStorage.getItem('userId');
        if (storageUserId) {
            handleLogin(+storageUserId);
            return;
        }
        
        handleLogout();
    }, []);

    return (
        <UserContext
            value={{
                authStatus: authStatus,
                isAuthenticated: authStatus === 'authenticated',
                user: user,
                login: handleLogin,
                logout: handleLogout
            }}>
            {children}
        </UserContext>
    );
}
