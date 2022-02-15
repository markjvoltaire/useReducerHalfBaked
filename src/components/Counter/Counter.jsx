import { useEffect, useState, useReducer } from 'react'

const pinkRGB = `rgb(236, 72, 153)`
const initialState = { color: pinkRGB, count: 0 }

function stateReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { color: pinkRGB, count: state.count + 1 }
    case 'decrement':
      return { color: pinkRGB, count: state.count - 1 }
    case 'reset':
      return { color: pinkRGB, count: 0 }
    default:
      return 'hello'
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(stateReducer, initialState)

  const incrementCount = () => {
    dispatch({ type: 'increment' })
  }

  const decrementCount = () => {
    dispatch({ type: 'decrement' })
  }

  const resetCount = () => {
    dispatch({ type: 'reset' })
  }

  // const [count, setCount] = useState(0)
  // const [currentColor, setCurrentColor] = useState(pinkRGB)

  // useEffect(() => {
  //   if (count === 0) {
  //     setCurrentColor(pinkRGB)
  //   }

  //   if (count > 0) {
  //     setCurrentColor(`rgb(52, 211, 153)`)
  //   }

  //   if (count < 0) {
  //     setCurrentColor(`rgb(239, 68, 68)`)
  //   }
  // }, [count])

  // const increment = () => {
  //   setCount((prevState) => prevState + 1)
  // }

  // const decrement = () => {
  //   setCount((prevState) => prevState - 1)
  // }

  // const reset = () => {
  //   setCount(0)
  // }

  return (
    <main className="bg-black bg-opacity-90 min-h-screen flex flex-col items-center justify-center text-4xl text-pink-500">
      <h1 className="mb-5">{state.count}</h1>
      <div className="flex w-1/2 justify-around">
        <button
          className="text-green-400 border-2 border-green-400 p-3"
          type="button"
          onClick={incrementCount}
          aria-label="increment"
        >
          Increment
        </button>
        <button
          className="text-red-500 border-2 border-red-500 p-2"
          type="button"
          onClick={decrementCount}
          aria-label="decrement"
        >
          Decrement
        </button>
        <button
          className="text-pink-500 border-2 border-pink-500 p-2"
          type="button"
          aria-label="reset"
          onClick={resetCount}
        >
          Reset
        </button>
      </div>
    </main>
  )
}
