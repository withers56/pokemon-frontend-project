import PokemonsList from "../components/pokemons/PokemonsList";
import classes from './AllPokemon.module.css'
import {useEffect, useState} from "react";
import {logDOM} from "@testing-library/react";
import MainFeaturedPokemon from "../components/pokemons/MainFeaturedPokemon";
import AnimationAcrossScreen from "../components/ui/AnimationAcrossScreen";
import {useHistory} from "react-router-dom";
import Searchbar from "../components/ui/Searchbar";

function AllPokemon() {
    const [isLoading, setIsLoading] = useState(true)
    const [loadedPokemons, setLoadedPokemons] = useState([]);
    const [pokemondata, setPokemondata] = useState([]);
    const arrayOfFeaturedPokemon = [25, 133, 143, 666, 150, 6]

    useEffect(() => {
        let featuredPokemon = [];

        if (localStorage.getItem('featuredPokemon') == null) {
            Promise.all(Array.from({ length: arrayOfFeaturedPokemon.length }, (_, i) => // change number to 151
                fetch(`https://pokeapi.co/api/v2/pokemon/${arrayOfFeaturedPokemon[i]}`)
                    .then(res => res.json())
                    .then((data) => {
                        console.log(data)
                        console.log('inside fetch')

                        const addedPokemon = {
                            id: data.id,
                            name: data.name,
                            height: data.height,
                            weight: data.weight,
                            sprites: data.sprites,
                            types: data.types,
                            stats: data.stats,
                            abilities: data.abilities

                        }
                        featuredPokemon.push(addedPokemon)
                        window.localStorage.setItem('featuredPokemon', JSON.stringify(featuredPokemon))

                    })
            )).then(() => setPokemondata(featuredPokemon))
        }
        else {
            console.log('inside localstorage grab')
            setPokemondata(JSON.parse(window.localStorage.getItem('featuredPokemon')))
        }
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
            <div className='d-flex justify-content-center'>
                <div className="lds-circle">
                    <div></div>
                </div>
            </div>
        )
    }

    function test() {
        console.log('hi')
    }

    return (
        <div className=''>
            <div className='row gx-0'>
                <div className="col-12">
                    <div className=''>
                        <Searchbar/>
                        <AnimationAcrossScreen  char='pika'/>
                        <AnimationAcrossScreen  char='ash'/>
                    </div>
                    <MainFeaturedPokemon pokemon={pokemondata[pokemondata.length - 1]} clickTest={test}/>
                </div>
                <div className="col-12">
                    <PokemonsList pokemons={pokemondata}/>
                </div>
            </div>
        </div>

    )
}

export default AllPokemon;