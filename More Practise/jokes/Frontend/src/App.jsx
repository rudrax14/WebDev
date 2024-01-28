import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios';
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {

    axios.get('/api/jokes')
      .then((response) => {
        console.log(response.data)
        setJokes(response.data)
      })
      .catch((error) => {
        console.log(error)
      })

  }, [])



  return (
    <>
      <h2>Jokes API</h2>
      <p>jokes {jokes.length}</p>

      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }

    </>
  )
}

export default App
