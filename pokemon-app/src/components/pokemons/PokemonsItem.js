import classes from './PokemonsItem.module.css'

function PokemonsItem(props) {
    return (
        <div className={classes.card}>
            <div>{props.name}</div>
            <div>{props.url}</div>
        </div>
    )
}

export default PokemonsItem;