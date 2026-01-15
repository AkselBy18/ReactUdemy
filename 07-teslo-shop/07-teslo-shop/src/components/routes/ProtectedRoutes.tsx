import { useAuthStore } from "@/auth/store/auth.store";
import type { PropsWithChildren } from "react"
import { Navigate } from "react-router";

export const AuthenticateRoute = ({ children }: PropsWithChildren) => {

    const { authStatus } = useAuthStore();

    if (authStatus === 'checking') return null;

    if (authStatus === 'not-authenticate') return <Navigate to='/auth/login' />

    return children;
}

export const NoAuthenticateRoute = ({ children }: PropsWithChildren) => {

    const { authStatus } = useAuthStore();

    if (authStatus === 'checking') return null;

    if (authStatus === 'authenticate') return <Navigate to='/' />

    return children;
}

export const AdminRoute = ({ children }: PropsWithChildren) => {

    const { authStatus, isAdmin } = useAuthStore();

    if (authStatus === 'checking') return null;

    if (authStatus === 'not-authenticate') return <Navigate to='/auth/login' />

    if (!isAdmin()) return <Navigate to='/'/>;

    return children;
}
