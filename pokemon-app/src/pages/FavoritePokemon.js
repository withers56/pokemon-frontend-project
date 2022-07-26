import {useContext} from "react";
import FavoritesContext from "../store/favorites-context";
import PokemonsList from "../components/pokemons/PokemonsList";

function FavoritePokemon() {

    const favoritesCtx = useContext(FavoritesContext)
    const favoritePokemon = favoritesCtx.favorites
    console.log(favoritesCtx.favorites)


    return (
        <div>
            <PokemonsList pokemons={favoritePokemon} />
        </div>
    )
}

export default FavoritePokemon;