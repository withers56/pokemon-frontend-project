import PokemonsItem from "./PokemonsItem";
import classes from './PokemonsList.module.css'

function PokemonsList(props) {
    function getIdFromUrl(url) {
        const splitUrl = url.split("/")
        return splitUrl[6];
    }
    return (
        <div className={classes.list}>
            {props.pokemons.map(pokemon => <PokemonsItem
                key={getIdFromUrl(pokemon.url)}
                name={pokemon.name}
                url={pokemon.url} />)}
        </div>
    )
}

export default PokemonsList;