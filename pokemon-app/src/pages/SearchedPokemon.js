import {useContext, useEffect, useState} from "react";
import classes from './SearchedPokemon.module.css';
import otherClasses from '../components/pokemons/MainFeaturedPokemon.module.css'
import {heightAndWeightConverter} from "../functions/conversions/Conversions";
import StatChart from "../components/ui/StatChart";
import FavoritesContext from "../store/favorites-context";

function SearchedPokemon(props) {
    let id = props.location.state;
    const [isLoading, setIsLoading] = useState(true)
    const [pokemondata, setPokemondata] = useState([]);

    const favoritesCtx = useContext(FavoritesContext);

    const itemIsFavorite = favoritesCtx.itemIsFavorite(id);

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

    function toggleMeetupStatusHandler() {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id)
        } else {
            favoritesCtx.addFavorite({
                id: props.id,
                name: props.name,
                sprites: props.sprites,
                height: props.height,
                weight: props.weight,
                types: props.types
            })
        }
        console.log(favoritesCtx.favorites)
    }


    return (
        <div>
            <div className='row mb-3'>
                <div className="col-12 col-md-5">
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
                <div className="col-12 col-md-7">
                    <div className={`card mx-auto my-5 ${classes.width80} boxshadow`}>
                        <div className="card-body">
                            <h5 className="card-title">Info</h5>
                            <p className="card-text">
                                <div className='row'>
                                    <div className='col my-2'>Height: {heightAndWeightConverter(pokemondata[0].height)}m</div>
                                    <div className='col my-2'>Weight: {heightAndWeightConverter(pokemondata[0].weight)}kg</div>
                                </div>
                            </p>
                            <p className="card-text">
                                <div className='row'>
                                    <div className='col my-2'>Types: {pokemondata[0].types.map(type => <span key={type.type.name}>{type.type.name} </span>)}</div>
                                     <div className='col my-2'>Abilities: {pokemondata[0].abilities.map(ability => <span key={ability.ability.name}>{ability.ability.name} </span>)}</div>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className="col-12 col-md-12">
                    <StatChart pokemonStats={pokemondata[0].stats}/>
                </div>
            </div>
        </div>


    )
}

export default SearchedPokemon;