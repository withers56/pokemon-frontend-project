import classes from './MainFeaturedPokemon.module.css'

function MainFeaturedPokemon(props) {
    const featuredPokemon = props.pokemon
    console.log(featuredPokemon)
    return(
        <div className='row'>
            <div className='col-4'>
                <div className='my-5 text-center'>
                    <img className={classes.image} src={featuredPokemon.sprites.front_default} alt="main poke"/>
                    <div>{featuredPokemon.name}</div>
                </div>
            </div>
            <div className='col-8'>

            </div>
        </div>
    )
}

export default MainFeaturedPokemon;