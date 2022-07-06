import {Link} from "react-router-dom";
import classes from './MainNavagation.module.css'
import {useContext} from "react";

function MainNavagation() {

    return (
        <header className={classes.nav}>
            <div>LoGo</div>
            <nav>
                <ul className={classes.links}>
                    <li>
                        <Link to='/'>Pokemon Search</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>Favorite Pokemon</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavagation;