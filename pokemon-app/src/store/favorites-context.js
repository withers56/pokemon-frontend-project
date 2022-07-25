import {createContext, useState} from "react";
import {log10} from "chart.js/helpers";

if (window.localStorage.getItem('favorites') == null) {
    let array = []

    window.localStorage.setItem('favorites', JSON.stringify(array))
}

let storedFavorites = JSON.parse(window.localStorage.getItem('favorites'));

const FavoritesContext = createContext({
    favorites: storedFavorites,
    totalFavorites: 0,
    //initailze empty pointers to functions, pass them a paramater for IDE autocompletion, not necessaruy
    addFavorite: (favoritePokemon) => {},
    removeFavorite: (pokemonId) => {},
    itemIsFavorite: (pokemonId) => {}

});


const SearchedPokemonContext = createContext( {
    searchedId: [],
})

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState(storedFavorites)

    //better way of updating state if you depend on a previous version
    function addFavoritesHandler(favoritePokemon) {
        setUserFavorites((prevUserFavorites) => {

            return prevUserFavorites.concat(favoritePokemon)
        })

        storedFavorites.push(favoritePokemon);

        window.localStorage.setItem('favorites', JSON.stringify(storedFavorites))

        console.log(storedFavorites)
    }

    function removeFavoritesHandler(pokemonId){
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== pokemonId)
        })

        console.log(storedFavorites)

        for (let i = 0; i < storedFavorites.length; i++) {
            if (storedFavorites[i].id === pokemonId) {
                storedFavorites.splice(i, 1)
            }
        }
        console.log(storedFavorites)

        window.localStorage.setItem('favorites', JSON.stringify(storedFavorites))
    }

    function itemIsFavoriteHandler(pokemonId) {
        return userFavorites.some(pokemon => pokemon.id === pokemonId)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoritesHandler,
        removeFavorite: removeFavoritesHandler,
        itemIsFavorite: itemIsFavoriteHandler
    }


    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;