import classes from './MainFeaturedPokemon.module.css'
import {heightAndWeightConverter, test} from "../../functions/conversions/Conversions";


function MainFeaturedPokemon(props) {
    const featuredPokemon = props.pokemon
    console.log(featuredPokemon)
    return(

        <div className={`${classes.mainFeaturedPokemon}`}>
            <div className=''>
                <div className='my-4 text-center'>
                    <h2>Featured Pokemon</h2>
                    <img className={classes.image} src={featuredPokemon.sprites.front_default} alt="main poke"/>
                    <div className={classes.pokemonHeader}>{featuredPokemon.name} #{featuredPokemon.id}</div>
                </div>
            </div>
            <div className={`${classes.navtab}`}>
                    <div className="card text-center my-auto boxshadow">
                        <div className="card-header">
                            <div className="nav nav-tabs card-header-tabs" id="nav-tab" role="tablist">
                                <button className="nav-link active text-orange" id="nav-home-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                                        aria-selected="true">Info
                                </button>
                                <button className="nav-link text-orange" id="nav-profile-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile"
                                        aria-selected="false">Stats
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                                     aria-labelledby="nav-home-tab" tabIndex="0">
                                    <div className='row'>
                                        <div className='col my-2'>Height: {heightAndWeightConverter(featuredPokemon.height)}m</div>
                                        <div className='col my-2'>Weight: {heightAndWeightConverter(featuredPokemon.weight)}kg</div>
                                    </div>
                                    <div className='row'>
                                        <div className='col my-2'>Types: {featuredPokemon.types.map(type => <span key={type.type.name}>{type.type.name} </span>)}</div>
                                        <div className='col my-2'>Abilities: {featuredPokemon.abilities.map(ability => <span key={ability.ability.name}>{ability.ability.name} </span>)}</div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"
                                     tabIndex="0">
                                    <div className='row'>
                                        <div className="col my-2">Hp: {featuredPokemon.stats[0].base_stat}</div>
                                        <div className="col my-2">Attack: {featuredPokemon.stats[1].base_stat}</div>
                                    </div>
                                    <div className='row'>
                                        <div className="col my-2">Defense: {featuredPokemon.stats[2].base_stat}</div>
                                        <div className="col my-2">Speed: {featuredPokemon.stats[3].base_stat}</div>
                                    </div>
                                    <div className='row'>
                                        <div className="col my-2">Special-Attack: {featuredPokemon.stats[4].base_stat}</div>
                                        <div className="col my-2">Special-Defense: {featuredPokemon.stats[5].base_stat}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default MainFeaturedPokemon;