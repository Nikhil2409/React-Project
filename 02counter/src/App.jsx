import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(15);
  //let counter = 0;
  //const [variable,method] = useState(initial value);
  //if initial value is not defined then it is set to NaN.
  const addValue = () => {
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  //for editing the vraiable in the state, we have to make use of the function attached only, we cannot update it otherwise.

  return (
    <>
    <h1>
        React Course
    </h1>
    <h2>
      Counter value : {counter}
    </h2>
    <button
    onClick = {addValue}>
      add value
    </button> {" "}
    <button
    onClick = {removeValue}>
      remove value
    </button>
    <p>
      footer : {counter}
    </p>

    </>
      
  )
}

export default App
