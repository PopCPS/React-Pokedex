import { useEffect, useState } from "react" 
import './assets/pokemonCard.css'

const PokemonCard = (props) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.idPokemon + 1}`);
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

    const idPokemonCorreto = props.idPokemon + 1

    return (
        <div className={`card-general-style ${data.types[0].type.name}-type-color`} >
            <div className="flexbox-div flexbox-name-type">
                <h2 className="pokemon-name">{props.pokeName[0].toUpperCase() + props.pokeName.slice(1)}</h2>
                <div className="flexbox-div">
                    {data.types.map((pokemonType, index) => {
                        return (
                            <h3 
                                key={index}
                                className={`pokemon-type ${data.types[0].type.name}-type-color-name`}
                            >
                                {pokemonType.type.name}
                            </h3>
                        )
                    })}
                </div>
            </div>
            <div className="flexbox-div flexbox-img-id">
                <h2 className="pokemon-id">
                    #{'0'.repeat( Math.max(4 - idPokemonCorreto.toString().length, 0)) + idPokemonCorreto}
                </h2>
                <img className="card-image" src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${props.idPokemon + 1}.svg`}></img>
                
            </div>
        </div>
    )
}

export default PokemonCard