import { UserContext } from "@/09-useContext/context/UserContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router"
import { toast } from "sonner"

export const LoginPage = () => {

  const { login } = useContext(UserContext);
  const [userId, setUserId] = useState('');

  const navigation = useNavigate()

  const handleSummit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = login(+userId);
    if (!result) {
      toast.error('Usuario no encontrado');
      return;
    }

    navigation('/profile')
  }

  return (
    <div className="flex flex-col item-center min-h-screen">
      <h1 className="text-xl4 fond-bold">Iniciar sesion</h1>
      <hr />
      <form
        className="flex flex-col gap-2 my-10"
        onSubmit={(event) => handleSummit(event)}>
        <Input
          type="number"
          placeholder="ID del usuario"
          value={userId}
          onChange={(event) => setUserId(event.target.value)}
        >
        </Input>

        <Button
          type="submit">
          Login
        </Button>
      </form>

      <Link to="/about">
        <Button
          variant="ghost"
        >
          Volver a la pagin pricipal
        </Button>
      </Link>
    </div>
  )
}
