import PokemonsList from "../components/pokemons/PokemonsList";
import {useEffect, useState} from "react";

function AllPokemon() {
    const [isLoading, setIsLoading] = useState(true)
    const [loadedPokemons, setLoadedPokemons] = useState([]);

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
        <div>this is where all the pokemon will go
            <PokemonsList pokemons={loadedPokemons} />
        </div>

    )
}

export default AllPokemon;