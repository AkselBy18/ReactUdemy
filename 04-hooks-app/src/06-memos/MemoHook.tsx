import { useCallback, useState } from "react"
import { MyTitle } from "./ui/MyTitle"
import { MySubtitle } from "./ui/MySubtitle";

export function MemoHook() {

  const [title, setTitle] = useState('Hola');
  const [subtitle, setSubtitle] = useState('Mundo');
  const handleMyAPI = useCallback(() => {
    console.log('Llamar a mi API -', subtitle);
  }, [subtitle]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-xl2 font-hint text-white">
        MemoApp
      </h1>

      <MyTitle title={title} />

      <MySubtitle
        subtitle={subtitle}
        callMyAPI={handleMyAPI}
      />

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setTitle('Hello ' + new Date().getTime())}
      >
        Cambiar título
      </button>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setSubtitle('Word')}
      >
        Cambiar subtitulo
      </button>
    </div>
  )
}
