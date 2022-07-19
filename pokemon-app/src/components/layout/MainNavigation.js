import {Link} from "react-router-dom";
import classes from './MainNavagation.module.css'
import {useContext} from "react";

function MainNavagation() {

    return (
        <header className={classes.nav}>
            <Link to='/' className={`py-3 px-2 text-decoration-none text-dark`}>LoGo</Link>
            <div className={classes.links}>
                <Link className={`py-3 px-2 text-decoration-none ${classes.tabDiv}`} to='/'>Pokemon Search</Link>
                <Link className={`py-3 px-2 text-decoration-none ${classes.tabDiv}`} to='/favorites'>Favorite Pokemon</Link>
            </div>
        </header>
    )
}

export default MainNavagation;