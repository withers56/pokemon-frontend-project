import classes from './PokemonsItem.module.css'
import Card from "../ui/Card";

function PokemonsItem(props) {
    function heightAndWeightConverter(value) {
        //turns value into string and not a number
        value = value + ""

        const tempArray = value.split('');
        tempArray.splice(tempArray.length - 1, 0, '.')

        return tempArray.join("")
    }

    return (
        <div className={`card mx-3 my-1 ${classes.featuredPokemonCard}`}>
            <img src={props.sprites.front_default} alt="" className='card-img-top'/>
            <div className="card-body">
                <h5 className="card-title text-center">{props.name}</h5>
                <p className="card-text text-center">Height: {heightAndWeightConverter(props.height)}m</p>
                <p className="card-text text-center">Weight: {heightAndWeightConverter(props.weight)}kgs</p>
            </div>
        </div>
    )
}

export default PokemonsItem;