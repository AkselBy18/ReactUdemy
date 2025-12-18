import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from 'sonner'
/* import { ClientInformation } from './08-use-suspense/ClientInformation'
import { getUser } from './08-use-suspense/api/get-user.actions' */
import { ProfessionalApp } from './09-useContext/ProfessionalApp'
/* import { HooksApp } from './HooksApp'
import { TrafficLight } from './01-useState/TrafficLight'
import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook'
import { PokemonPage } from './03-examples/PokemonPage'
import { FocusScreen } from './04-useRef/FocusScreen'
import { TasksApp } from './05-useReducer/TaskApp'
import { ScrambleWords } from './05-useReducer/ScrambleWords'
import { MemoHook } from './06-memos/MemoHook' */
/* import { MemoCounter } from './06-memos/MemoCounter' */

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    {/* <HooksApp/> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/*<TasksApp />*/}
    {/* <ScrambleWords /> */}
    {/* <MemoHook />  */}
    {/* <MemoCounter /> */}
    {/* <InstagromApp /> */}
    {/* <Suspense fallback={
      <div className='bg-gradient flex flex-col'>
        <h1 className='text-xl-2'>Cargando...</h1>
      </div>
    }>
      <ClientInformation getUser={getUser(1001)}/>
    </Suspense> */}
    <ProfessionalApp />
  </StrictMode>,
)
