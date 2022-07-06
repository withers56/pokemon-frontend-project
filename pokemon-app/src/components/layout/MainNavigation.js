import {Link} from "react-router-dom";

import {useContext} from "react";

function MainNavagation() {

    return (
        <header>
            <div>LoGo</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>Favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavagation;