import PokemonCard from "./pokemonCard"
import { useEffect, useState } from "react"

function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");
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
    <>
      {data.results.map((data, index) => {
        return (
          <PokemonCard
            idPokemon = {index}
            pokeName = {data.name}
            key = {index}
          />
        )
      })}
    </>
  )
}

export default App