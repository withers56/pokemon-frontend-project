import PokemonsItem from "./PokemonsItem";
import classes from './PokemonsList.module.css'

function PokemonsList(props) {
    function getIdFromUrl(url) {
        const splitUrl = url.split("/")
        return splitUrl[6];
    }
    return (
        <div className='d-flex'>
            {props.pokemons.map(pokemon => <PokemonsItem
                key={pokemon.id}
                name={pokemon.name}
                height={pokemon.height}
                weight={pokemon.weight}
                sprites={pokemon.sprites}/>)}
        </div>
    )
}

export default PokemonsList;