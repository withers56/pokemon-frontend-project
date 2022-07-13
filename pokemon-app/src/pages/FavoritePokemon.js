import {useContext} from "react";
import FavoritesContext from "../store/favorites-context";

function FavoritePokemon() {

    const favoritesCtx = useContext(FavoritesContext)

    console.log(favoritesCtx)

    return (
        <div>this si where your favorite pokemon will go
        </div>
    )
}

export default FavoritePokemon;