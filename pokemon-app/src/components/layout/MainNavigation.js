import {Link} from "react-router-dom";
import classes from './MainNavagation.module.css'
import {useContext} from "react";

function MainNavagation() {

    return (
        <header className={classes.nav}>
            <div  className=''>LoGo</div>
            <div className={classes.links}>
                <div className='py-3'>
                    <Link to='/'>Pokemon Search</Link>
                </div>
                <div className='py-3'>
                    <Link to='/favorites'>Favorite Pokemon</Link>
                </div>
            </div>
        </header>
    )
}

export default MainNavagation;