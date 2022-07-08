function MainFeaturedPokemon(props) {
    const featuredPokemon = props.pokemon
    console.log(featuredPokemon)
    return(
        <div className='row'>
            <div className='col-6'>
                <div>
                    <img src={featuredPokemon.sprites.front_default} alt="main poke"/>
                    <div>{featuredPokemon.name}</div>
                </div>
            </div>
            <div className='col-6'>

            </div>
        </div>
    )
}

export default MainFeaturedPokemon;