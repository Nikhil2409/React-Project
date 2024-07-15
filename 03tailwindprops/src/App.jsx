import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: 'Nikhil',
    age: 21,
    address: {
      city: 'Mangalore',
      state: 'Karnataka',
      country: 'India'
    }
  }
  let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md' >Vite with Tailwind</h1>
      <Card username="hitesh" myArr={newArr} image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWtRQul4j5Cz9jyQb2e4TPndJRDLGRBPlFLA&s" />
      <Card username='Json' post='Staff Engg.' image = " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf7_g32AJh8IkT9JVSPaYiHEMFyaLHXzxYXA&s" />
      <Card />
    </>
  )
}

export default App