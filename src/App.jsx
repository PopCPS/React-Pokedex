import PokemonCard from "./pokemonCard"
import NextPageButton from "./nextPokemonPageButton";
import { useEffect, useState } from "react"
import "./assets/app.css"

function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [baseURL, setBaseURL] = useState(null)

  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
          setBaseURL(`https://pokeapi.co/api/v2/pokemon?limit=21&offset=0`)
          const response = await fetch(baseURL);
        if (response.ok) {
          const result = await response.json();
          setData(result);
        } else {
          throw new Error(`Request failed with status ${response.status}`);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [])

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="pokemon-card-container">
      {data.results.map((data, index) => {
        return (
          <PokemonCard
            idPokemon = {index}
            pokeName = {data.name}
            key = {index}
          />
        )
      })}
      <NextPageButton

      />
    </div>
  )
}

export default App