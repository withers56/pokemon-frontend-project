import {createContext, useState} from "react";

const FavoritesContext = createContext({
    favorites: [],
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
    const [userFavorites, setUserFavorites] = useState([])


    //better way of updating state if you depend on a previous version
    function addFavoritesHandler(favoritePokemon) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoritePokemon)
        })
    }

    function removeFavoritesHandler(pokemonId){
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== pokemonId)
        })
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