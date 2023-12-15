import fetchData from "./api";
import PokemonCard from "./pokemonCard"
import NextPageButton from "./nextPokemonPageButton";
import PreviousPageButton from "./previousPokemonPageButton";
import SidePokemonCard from "./sidePokemonCard";
import useStore from "./useStore";
import { useEffect, useState } from "react"
import "./assets/app.css"

function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { apiUrl } = useStore()

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const result = await fetchData(apiUrl);
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDataAsync();
  }, [apiUrl]);


  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <nav>
        <input type="text" />
        <button></button>
      </nav>
      <main className="central-portion">
        <PreviousPageButton
          url = {apiUrl}
          previousPageUrl = {data.previous}
        />
        <div className="pokemon-card-container">
          {data.results.map((data, index) => {
            return (
              <PokemonCard
                idPokemon = {data.url.match(/(?<=\/)\d+?(?=\/)/gm)[0]}
                pokeName = {data.name}
                key = {index}
              />
            )
          })}
        </div>
        <SidePokemonCard/>
        <NextPageButton
          url = {apiUrl}
          nextPageUrl = {data.next}
        />
      </main>
    </>
  )
}

export default App

{/* <div className="pokemon-card-container">
        {data.results.map((data, index) => {
          return (
            <PokemonCard
              idPokemon = {data.url.match(/(?<=\/)\d+?(?=\/)/gm)[0]}
              pokeName = {data.name}
              key = {index}
            />
          )
        })}
      </div>
      <PreviousPageButton
        url = {apiUrl}
        previousPageUrl = {data.previous}
      />
      <NextPageButton
        url = {apiUrl}
        nextPageUrl = {data.next}
      /> */}

      // source https://www.behance.net/gallery/113562309/Pokemon-Pokedex-Website-Redesign-Concept?tracking_source=search_projects&l=9