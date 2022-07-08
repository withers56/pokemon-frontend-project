import {Link} from "react-router-dom";
import classes from './MainNavagation.module.css'
import {useContext} from "react";

function MainNavagation() {

    return (
        <header className={classes.nav}>
            <div  className=''>LoGo</div>
            <div className={classes.links}>
                <div className={`py-3 px-1 ${classes.tabDiv}`}>
                    <Link className='text-decoration-none text-white' to='/'>Pokemon Search</Link>
                </div>
                <div className='py-3 px-1'>
                    <Link className='text-decoration-none text-white' to='/favorites'>Favorite Pokemon</Link>
                </div>
            </div>
        </header>
    )
}

export default MainNavagation;