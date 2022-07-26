import {useContext} from "react";
import FavoritesContext from "../store/favorites-context";
import PokemonsList from "../components/pokemons/PokemonsList";

function FavoritePokemon() {

    const favoritesCtx = useContext(FavoritesContext)
    const favoritePokemon = favoritesCtx.favorites
    console.log(favoritesCtx.favorites)


    if (favoritePokemon.length < 1) {
        return (
            <div className='text-center my-5'>
                You have no favorite pokemon yet.
            </div>
        )
    }

    return (
        <div>
            <PokemonsList pokemons={favoritePokemon} />
        </div>
    )
}

export default FavoritePokemon;