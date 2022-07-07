import classes from './PokemonsItem.module.css'
import Card from "../ui/Card";

function PokemonsItem(props) {
    return (
        <Card>
            <div className='d-flex align-items-center'>
                <div>
                    <img src={props.sprites.front_default} alt="pokemon image"/>
                </div>
                <div className='mx-4'>
                    <div>{props.name}</div>
                    <div>Electric</div>
                </div>
                <div className='mx-4'>
                    <div>Height: {props.height}</div>
                    <div>Weight: {props.weight}</div>
                </div>
            </div>
        </Card>
    )
}

export default PokemonsItem;