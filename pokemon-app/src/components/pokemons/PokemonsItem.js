import classes from './PokemonsItem.module.css'
import Card from "../ui/Card";
import {useHistory} from "react-router-dom";

function PokemonsItem(props) {
    console.log(props.types)
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
        <div className={`card mx-2 my-1 ${classes.featuredPokemonCard}`}>
            <img src={props.sprites.front_default} alt="" className='card-img-top border-bottom border-dark'/>
            <div className="card-body">
                <div className='d-flex justify-content-center'>{props.types.map(type => <span className='mx-2' key={props.id + type.type.name}>{type.type.name}</span>)}</div>
                <h5 className="card-title text-center">{props.name}</h5>
                <div className="card-text text-center">Height: {heightAndWeightConverter(props.height)}m</div>
                <div className="card-text text-center">Weight: {heightAndWeightConverter(props.weight)}kgs</div>
            </div>
            <button onClick={props.btn}/>
        </div>
    )
}

export default PokemonsItem;