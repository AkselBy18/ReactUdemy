import { UserContext } from "@/09-useContext/context/UserContext"
import { Button } from "@/components/ui/button";
import { use } from "react"
import { Link } from "react-router"

export const AboutPage = () => {
  const { isAuthenticated, logout } = use(UserContext);

  return (
    <div className="flex flex-col items-center justify-content min-h-screen">
      <h1 className="text-xl4 font-bold">Pagina sobre mi</h1>
      <div className="flex flex-col gap-2">
        {
          isAuthenticated && (
            <Link to="/profile" className="hover:text-blue-500 underline text-xl2">
              Perfil del usuario
            </Link>
          )
        }

        {
          isAuthenticated ? (
            <Button
              variant="destructive"
              className="mt-4"
              onClick={logout}  
            >
              Salir
            </Button>
          ) : (
            <Link to="/login" className="hover:text-blue-500 underline text-xl2">
              Iniciar sesión
            </Link>
          )
        }
      </div>
    </div>
  )
}
