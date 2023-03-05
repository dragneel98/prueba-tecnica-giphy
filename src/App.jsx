import { useEffect, useState } from 'react'
import './App.css'
import Gifs from './components/gifs'


function App() {
  const [catFact, setCatFact] = useState("")
  const [fact, setFact] = useState("")
  const [giphy, setgiphy] = useState("")
  
  async function getFacts() {
    const request = await fetch("https://catfact.ninja/fact")
    const response = await request.json()
    const facts = response?.fact.split(" ").slice(0,3).join(" ")
    setFact(facts)
    setCatFact(response.fact)
  }
  async function getGif({setgiphy,fact}) {
    const GYPHY_API_KEY = "jwAgVcSRLXDessKATxYwfMOlS9twe6AX"
    const request = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${GYPHY_API_KEY}&q=${fact}&limit=25&offset=0&rating=g&lang=en`)
    const response = await request.json()
    const giphyUrl = response?.data[0]?.images.original.url
    setgiphy(giphyUrl)
  }
  
  
  getGif({setgiphy,fact})

  return (
    <div className="App">
      <img src={giphy} alt={fact}></img>
      <p> {catFact} </p>
      <button onClick={getFacts}>obtener catFacts</button>
     
    </div>
  )
}

export default App
