import PokemonsList from "../components/pokemons/PokemonsList";
import classes from './AllPokemon.module.css'
import {useEffect, useState} from "react";
import {logDOM} from "@testing-library/react";

function AllPokemon() {
    const [isLoading, setIsLoading] = useState(true)
    const [loadedPokemons, setLoadedPokemons] = useState([]);
    const [pokemondata, setPokemondata] = useState([]);
    const arrayOfFeaturedPokemon = [25, 133, 143]

    useEffect(() => {
        let featuredPokemon = [];
        Promise.all(Array.from({ length: arrayOfFeaturedPokemon.length }, (_, i) => // change number to 151
            fetch(`https://pokeapi.co/api/v2/pokemon/${arrayOfFeaturedPokemon[i]}`)
                .then(res => res.json())
                .then((data) => {
                        console.log(data)

                        const addedPokemon = {
                            id: data.id,
                            name: data.name,
                            height: data.height,
                            weight: data.weight,
                            sprites: data.sprites
                        }
                        featuredPokemon.push(addedPokemon)

                })
        )).then(() => setPokemondata(featuredPokemon))
    },[])



    useEffect(() => {
        setIsLoading(true);
        fetch('https://pokeapi.co/api/v2/pokemon/').then(function (resp){
            return resp.json();
        }).then(function (data){
            const pokemons = [];

            for (const pokemon of data.results) {
                const pokemonToAdd = {
                    name: pokemon.name,
                    url: pokemon.url
                }
                pokemons.push(pokemonToAdd)
            }

            setIsLoading(false);
            setLoadedPokemons(pokemons)
        });
    }, [])

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }

    return (
        <div>
            <div className='row'>
                <div className="col-12">
                    <div className='d-flex justify-content-between align-items-center m-5' >
                        <h1>Pokemon</h1>
                        <div className=''>
                            <input type="text" id='pokemon-searchbar' placeholder='Search for pokemon..'/>
                        </div>
                    </div>
                    <div className={classes.mainFeaturedPokemon}>
                        main featured pokemon
                    </div>
                </div>
                <div className="col-6 border border-success">
                    <PokemonsList pokemons={pokemondata} /></div>
                <div className="col-6 border border-success">
                    fill
                </div>
            </div>
        </div>

    )
}

export default AllPokemon;