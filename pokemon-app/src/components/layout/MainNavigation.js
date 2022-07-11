import {Link} from "react-router-dom";
import classes from './MainNavagation.module.css'
import {useContext} from "react";

function MainNavagation() {

    return (
        <header className={classes.nav}>
            <div  className=''>LoGo</div>
            <div className={classes.links}>
                <Link className={`py-3 px-2 text-decoration-none text-white ${classes.tabDiv}`} to='/'>Pokemon Search</Link>
                <Link className={`py-3 px-2 text-decoration-none text-white ${classes.tabDiv}`} to='/favorites'>Favorite Pokemon</Link>
            </div>
        </header>
    )
}

export default MainNavagation;