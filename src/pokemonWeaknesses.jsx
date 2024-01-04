import useStore from './useStore';
import fetchData from "./api";
import { useState, useEffect } from 'react';
import './assets/sideCard.css';
import './assets/pokemonCard.css'

const PokemonWeaknesses = (props) => {

    const [type1Data, setType1Data] = useState(null);
    const [type2Data, setType2Data] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { sideBarPokemonID } = useStore();
    const weaknessArray = []

    useEffect(() => {
        setType2Data(null)
        const fetchDataAsync = async () => {
        try {
        const result = await fetchData(props.types[0].type.url);
        setType1Data(result);
        if(props.types.lenght != 0){
            const result = await fetchData(props.types[1].type.url);
            setType2Data(result);
        }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
        };

        fetchDataAsync();
        
    }, [sideBarPokemonID]);



    if(type1Data != null){
        type1Data.damage_relations.double_damage_from.map((doubleDamageTaken) => {
            weaknessArray.push(doubleDamageTaken)
        })
        if(type2Data != null){
            type2Data.damage_relations.double_damage_from.map((doubleDamageTaken) => {
                weaknessArray.push(doubleDamageTaken)
            })
        }
    }
    console.log(weaknessArray)

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
            console.log(type1Data),
            weaknessArray.map((type, index) => {
                return (
                    <img
                        key={index}
                        className={`weakness-img ${type.name}`}
                        src={`https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/${type.name}.svg`}
                    >
                    </img>
                )
            })
        )
}

export default PokemonWeaknesses