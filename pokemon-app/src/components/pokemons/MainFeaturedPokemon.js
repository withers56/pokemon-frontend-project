import classes from './MainFeaturedPokemon.module.css'
import {heightAndWeightConverter, test} from "../../functions/conversions/Conversions";


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
                <div className="card text-center m-5">
                    <div className="card-header">
                            <div className="nav nav-tabs card-header-tabs" id="nav-tab" role="tablist">
                                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                                        aria-selected="true">Home
                                </button>
                                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile"
                                        aria-selected="false">Profile
                                </button>
                                <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact"
                                        aria-selected="false">Contact
                                </button>
                                <button className="nav-link" id="nav-disabled-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled"
                                        aria-selected="false" disabled>Disabled
                                </button>
                            </div>
                    </div>
                    <div>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                                 aria-labelledby="nav-home-tab" tabIndex="0">
                                <div className='row'>
                                    <div className='col'>Height: {heightAndWeightConverter(featuredPokemon.height)}m</div>
                                    <div className='col'>Weight: {heightAndWeightConverter(featuredPokemon.weight)}kg</div>
                                </div>
                                <div className='row'>
                                    <div className='col'>Height: </div>
                                    <div className='col'>Weight: 23</div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"
                                 tabIndex="0">...
                            </div>
                            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab"
                                 tabIndex="0">...
                            </div>
                            <div className="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab"
                                 tabIndex="0">...
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MainFeaturedPokemon;