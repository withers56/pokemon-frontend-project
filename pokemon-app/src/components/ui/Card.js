import classes from './Card.module.css'
/*
* Wrapper class, wrapped content on meetupitem with this Card class, props.children allows data to persist
* if there wasnt props.children it would just be blank because Card would reutrn empty div
*/
function Card(props) {
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    )
}

export default Card;