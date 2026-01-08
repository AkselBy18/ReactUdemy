import { createBrowserRouter, Navigate } from "react-router";
import { ShopLayout } from "./shop/layout/ShopLayout";
import { HomePage } from "./shop/pages/home/HomePage";
import { AdminProductPage } from "./admin/pages/product/AdminProductPage";
import { GenderPage } from "./shop/pages/gender/GenderPage";
import { LoginPage } from "./auth/pages/login/LoginPage";
import { RegisterPage } from "./auth/pages/register/RegisterPage";
import { DashboardPage } from "./admin/pages/dashboard/DashboardPage";
import { AdminProductsPage } from "./admin/pages/products/AdminProductsPage";
import { ProductPage } from "./shop/pages/product/ProductPage";
import { lazy } from "react";

const AuthLayout = lazy(() => import('./auth/layout/AuthLayout'))
const AdminLayout = lazy(() => import('./admin/layout/AdminLayout'))


export const appRouter = createBrowserRouter([
    //MAIN ROUTES
    {
        path: "/",
        element: <ShopLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'product/:idSlug',
                element: <ProductPage />
            },
            {
                path: 'gender/:gender',
                element: <GenderPage />
            }
        ]
    },
    //AUTH ROUTES,
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {   
                index: true,
                element: <Navigate to='/auth/login' />
            },
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'register',
                element: <RegisterPage />
            }
        ]
    },

    //AMIN ROUTES
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <DashboardPage />
            },
            {
                path: 'products',
                element: <AdminProductsPage />
            },
            {
                path: 'product/:id',
                element: <AdminProductPage />
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to='/' />
    }
])