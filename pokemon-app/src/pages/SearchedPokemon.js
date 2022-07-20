import {useEffect, useState} from "react";
import classes from './SearchedPokemon.module.css';

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

    return (
        <div>
            <div className='row'>
                <div className="col-12 col-md-5 bg-primary">
                    <div>
                        <div>
                            <div className='text-center'>
                                <img className={classes.image} src={pokemondata[0].sprites.front_default} alt="main poke"/>
                            </div>
                            <div className='d-flex justify-content-center'>
                                {pokemondata[0].types.map(type => <span className='mx-3'>{type.type.name}</span>)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-7 bg-warning">
                    info
                </div>
            </div>
            <div className='row'>
                <div className="col-12 col-md-12 bg-danger">
                    stats graph
                </div>
            </div>
        </div>


    )
}

export default SearchedPokemon;