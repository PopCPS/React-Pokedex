import fetchData from "./api"
import useStore from "./useStore"
import { useEffect, useState } from "react" 
import './assets/pokemonCard.css'

const PokemonCard = (props) => {

    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${props.idPokemon}`
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { setSideBarPokemonID } = useStore();

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

    const idPokemonCorreto = parseInt(props.idPokemon)

    return (
        <div 
            className={`card-general-style ${data.types[0].type.name}`}
            onClick={(event) => {
                setSideBarPokemonID(event.currentTarget.querySelector('.pokemon-id').innerHTML.replace(/#0*([1-9]\d*)/, "$1"))
            }}
        >
            <div className="flexbox-div flexbox-name-type">
                <h2 className="pokemon-name">{props.pokeName[0].toUpperCase() + props.pokeName.slice(1)}</h2>
                <div className="flexbox-div">
                    {data.types.map((pokemonType, index) => {
                        return (
                            <h3 
                                key={index}
                                className={`pokemon-type ${pokemonType.type.name}-type`}
                            >
                                {pokemonType.type.name.toUpperCase()}
                            </h3>
                        )
                    })}
                </div>
            </div>
            <div className="flexbox-div flexbox-img-id">
                <h2 className="pokemon-id">
                    #{'0'.repeat( Math.max(4 - idPokemonCorreto.toString().length, 0)) + idPokemonCorreto}
                </h2>
                <img className="card-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.idPokemon}.png`}></img>
                
            </div>
        </div>
    )
}

export default PokemonCard