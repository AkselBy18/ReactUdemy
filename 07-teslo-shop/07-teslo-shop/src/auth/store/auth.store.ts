import type { User } from '@/interfaces/user.interface'
import { create } from 'zustand'
import { loginAction } from '../actions/login.action';
import { checkAuthAction } from '../actions/check-auth.action';
import { RegisterAction } from '../actions/register.action';

type AuthStatus = 'authenticate' | 'not-authenticate' | 'checking';

type AuthState = {
    //Properties
    user: User | null;
    token: string | null;
    authStatus: AuthStatus;

    //Getters
    isAdmin: () => boolean;

    //Actions
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
    checkAuthStatus: () => Promise<boolean>;
    register: (email: string, password: string, fullName: string) => Promise<boolean>;
}

//Zustand: MANEJADOR DE ESTADO
export const useAuthStore = create<AuthState>()((set, get) => ({
    user: null,
    token: null,
    authStatus: 'checking',

    //getters
    isAdmin: () => {
        const roles = get().user?.roles || [];
        return roles.includes('admin')
    },

    //Actions
    login: async (email: string, password: string) => {
        console.log({ email, password });

        try {
            const data = await loginAction(email, password);
            localStorage.setItem('token', data.token);
            set({ user: data.user, token: data.token, authStatus: 'authenticate' })
            return true;
        } catch (error) {
            set({ user: null, token: null, authStatus: 'not-authenticate' });
            localStorage.removeItem('token');
            return false;
        }
    },

    logout: () => {
        localStorage.removeItem('token');
        set({ user: null, token: null, authStatus: 'not-authenticate' });
    },

    checkAuthStatus: async () => {
        try {
            const { user, token } = await checkAuthAction();
            set({
                user: user,
                token: token,
                authStatus: 'authenticate'
            });
            return true;
        } catch (error) {
            console.log({ error });
            set({
                user: undefined,
                token: undefined,
                authStatus: 'not-authenticate'
            });
            return false;
        }
    },

    register: async (email: string, password: string, fullName: string) => {
        try {
            const data = await RegisterAction(email, password, fullName);
            localStorage.setItem('token', data.token);
            set({
                user: data.user,
                authStatus: 'authenticate',
                token: data.token
            });
            return true
        } catch (error) {
            localStorage.removeItem('token');
            set({
                user: undefined,
                token: undefined,
                authStatus: 'not-authenticate'
            })
            return false;
        }
    }
}));
