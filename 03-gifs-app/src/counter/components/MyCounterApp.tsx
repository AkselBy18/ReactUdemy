import { useCounter } from "../hooks/useCounter"

export function MyCounterApp() {
  
  const {counter, handleAdd, handleReset, handleSubtract} = useCounter(12);

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
    >
      <h1>Counter: {counter}</h1>  

      <div style={{display: 'flex', gap: 10}}>
        <button
          onClick={handleAdd}>
            +1
          </button>
        <button 
          onClick={handleSubtract}>
          -1
        </button>
        <button
          onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  )
}
