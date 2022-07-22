import {useEffect, useState} from "react";
import classes from './SearchedPokemon.module.css';
import otherClasses from '../components/pokemons/MainFeaturedPokemon.module.css'
import {heightAndWeightConverter} from "../functions/conversions/Conversions";
import StatChart from "../components/ui/StatChart";

function SearchedPokemon(props) {
    let id = props.location.state;
    const [isLoading, setIsLoading] = useState(true)
    const [pokemondata, setPokemondata] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        const pokemon = [];

        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(resp => resp.json()).then(data => {
            pokemon.push(data)
            setIsLoading(false);
        }).then(() => setPokemondata(pokemon))

    }, [])

    console.log(pokemondata)

    if (isLoading) {
        return (
            <div className='d-flex justify-content-center'>
                <div className="lds-circle">
                    <div></div>
                </div>
            </div>
        )
    }

    function chartInit() {

    }


    return (
        <div>
            <div className='row'>
                <div className="col-12 col-md-5 bg-primary">
                    <div>
                        <div>
                            <div className='text-center'>
                                <img className={classes.image} src={pokemondata[0].sprites.front_default} alt="main poke"/>
                            </div>
                            <div className=''>
                                <div className={`text-center ${otherClasses.pokemonHeader}`}>{pokemondata[0].name}</div>
                                <div className={`text-center ${otherClasses.pokemonHeader}`}>ID: {pokemondata[0].id}</div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-7 bg-warning">
                    <div>
                        <div className='row'>
                            <div className='col my-2'>Height: {heightAndWeightConverter(pokemondata[0].height)}m</div>
                            <div className='col my-2'>Weight: {heightAndWeightConverter(pokemondata[0].weight)}kg</div>
                        </div>
                        <div className='row'>
                            <div className='col my-2'>Types: {pokemondata[0].types.map(type => <span key={type.type.name}>{type.type.name} </span>)}</div>
                            <div className='col my-2'>Abilities: {pokemondata[0].abilities.map(ability => <span key={ability.ability.name}>{ability.ability.name} </span>)}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className="col-12 col-md-12 bg-danger">
                    <StatChart pokemonStats={pokemondata[0].stats}/>
                </div>
            </div>
        </div>


    )
}

export default SearchedPokemon;