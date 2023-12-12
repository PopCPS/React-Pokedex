const PokemonCard = (props) => {
    return (
        <div>
            <img src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${props.idPokemon + 1}.svg`}></img>
            <h2>{props.pokeName}</h2>
            <h3>{props.idPokemon + 1}</h3>
        </div>
    )
}

export default PokemonCard