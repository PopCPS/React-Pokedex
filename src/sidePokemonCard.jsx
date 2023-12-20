import useStore from './useStore';
import fetchData from "./api";
import { useState, useEffect } from 'react';
import './assets/sideCard.css'

const SidePokemonCard = (props) => {

    const [pokemonData, setPokemonData] = useState(null);
    const [speciesData, setSpeciesData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { showSideBar } = useStore();

    useEffect(() => {
        const fetchDataAsync = async () => {
        try {
        const result1 = await fetchData(`https://pokeapi.co/api/v2/pokemon/${showSideBar}/`);
        setPokemonData(result1);
        const result2 = await fetchData(`https://pokeapi.co/api/v2/pokemon-species/${showSideBar}/`)
        setSpeciesData(result2);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
        };
        
        fetchDataAsync();
    }, [showSideBar]);

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <section className="side-bar">
            <img className="image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${showSideBar}.png`}></img>
            <h3 className='id'>#{'0'.repeat( Math.max(4 - showSideBar.toString().length, 0)) + showSideBar}</h3>
            <h2 className='name'>{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1).toLowerCase()}</h2>
            <h4 className='genus'>{speciesData.genera[7].genus}</h4>
            <div className='pokemon-type-side-card'>
                {pokemonData.types.map((pokemonType, index) => {
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
            <h2 className='side-card-titles'>POKÉDEX ENTRY</h2>
            <p className='description'>
               {speciesData.flavor_text_entries[7].flavor_text.replace('\f', ' ')}
            </p>
            <h2 className='side-card-titles'>ABILITIES</h2>
            <div>
                <div>
                    <h3>

                    </h3>
                </div>
            </div>
            <div className='pokemon-data-parent'>
                <div className='pokemon-data'>
                    <h2 className='side-card-titles'>HEIGHT</h2>
                    <h2 className='pokemon-data-info'>{pokemonData.height / 10}m</h2>
                </div>
                <div className='pokemon-data'>
                    <h2 className='side-card-titles'>WEIGHT</h2>
                    <h2 className='pokemon-data-info'>{pokemonData.weight}</h2>
                </div>
                <div className='pokemon-data'>
                    <h2 className='side-card-titles'>WEAKNESSES</h2>
                    {pokemonData.types.map((pokemonType, index) => {
                    return (
                        <h3 
                            key={index}
                            className={`pokemon-type ${pokemonType.type.name}-type`}
                        >
                            {pokemonType.type.name.toUpperCase()}
                        </h3>
                    )
                    })}
                    <div></div>
                </div>
                <div className='pokemon-data'>
                    <h2 className='side-card-titles'>BASE EXP</h2>
                    <h2 className='pokemon-data-info'>{pokemonData.base_experience}</h2>
                </div>
            </div>
            <h2 className='side-card-titles'>STATS</h2>
            <div className='stats-row'>
                <div className='stats-block'>
                    <h3 className='stats-HP stats'>HP</h3>
                    <h3 className='stats-number'>{pokemonData.stats[0].base_stat}</h3>
                </div>
                <div className='stats-block'>
                    <h3 className='stats-ATK stats'>ATK</h3>
                    <h3 className='stats-number'>{pokemonData.stats[1].base_stat}</h3>
                </div>
                <div className='stats-block'>
                    <h3 className='stats-DEF stats'>DEF</h3>
                    <h3 className='stats-number'>{pokemonData.stats[2].base_stat}</h3>
                </div>
                <div className='stats-block'>
                    <h3 className='stats-SpA stats'>SpA</h3>
                    <h3 className='stats-number'>{pokemonData.stats[3].base_stat}</h3>
                </div>
                <div className='stats-block'>
                    <h3 className='stats-SpD stats'>SpD</h3>
                    <h3 className='stats-number'>{pokemonData.stats[4].base_stat}</h3>
                </div>
                <div className='stats-block'>
                    <h3 className='stats-SPD stats'>SPD</h3>
                    <h3 className='stats-number'>{pokemonData.stats[5].base_stat}</h3>
                </div>
                <div className='stats-block'>
                    <h3 className='stats-TOT stats'>TOT</h3>
                    <h3 className='stats-number'>
                        {
                            pokemonData.stats[0].base_stat +
                            pokemonData.stats[1].base_stat +
                            pokemonData.stats[2].base_stat +
                            pokemonData.stats[3].base_stat +
                            pokemonData.stats[4].base_stat +
                            pokemonData.stats[5].base_stat
                        }
                    </h3>
                </div>
            </div>
        </section>
    )
}

export default SidePokemonCard