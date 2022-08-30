import classes from './PokemonsItem.module.css'
import Card from "../ui/Card";
import {Link, useHistory} from "react-router-dom";
import {useContext} from "react";
import FavoritesContext from "../../store/favorites-context";

function PokemonsItem(props) {
    const favoritesCtx = useContext(FavoritesContext);

    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

    function toggleMeetupStatusHandler() {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id)
        } else {
            favoritesCtx.addFavorite({
                id: props.id,
                name: props.name,
                sprites: props.sprites,
                height: props.height,
                weight: props.weight,
                types: props.types
            })
        }
        console.log(favoritesCtx.favorites)
    }


    function heightAndWeightConverter(value) {
        //turns value into string and not a number
        value = value + ""

        const tempArray = value.split('');
        tempArray.splice(tempArray.length - 1, 0, '.')

        return tempArray.join("")
    }

    function returnPokemonTypes(types) {
        let html = '';

            for (const type of types) {
                console.log(type.type.name)
                let name = type.type.name
                html += <span>{name}</span>
            }
        console.log(html)
            return html
    }

    return (
        <div className={`card mx-2 mt-2 mb-3 boxshadow ${classes.featuredPokemonCard}`}>
            {itemIsFavorite ? <span><i className="bi bi-star-fill text-yellow m-1" onClick={toggleMeetupStatusHandler}></i></span> : <span><i className="bi bi-star-fill hover-opacity m-1" onClick={toggleMeetupStatusHandler}></i></span>}
            <img src={props.sprites.front_default} alt="" className='card-img-top border-bottom border-dark'/>
            <div className="card-body">
                <div className='d-flex justify-content-center'>{props.types.map(type => <span className='mx-2' key={props.id + type.type.name}>{type.type.name}</span>)}</div>
                <h5 className="card-title text-center">{props.name}</h5>
                <div className="card-text text-center">Height: {heightAndWeightConverter(props.height)}m</div>
                <div className="card-text text-center">Weight: {heightAndWeightConverter(props.weight)}kgs</div>
            </div>
            <div className='text-center my-2'>
                <Link to={{
                    pathname: '/searchedPokemon',
                    state: props.id,
                }}><button className='btn btn-primary'>go</button></Link>
            </div>
        </div>
    )
}

export default PokemonsItem;