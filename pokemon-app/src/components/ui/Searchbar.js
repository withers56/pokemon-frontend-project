import {Link, Redirect, useHistory} from "react-router-dom";
import {useRef} from "react";


function Searchbar(props) {
    let searchedNameRef = useRef();

    const history = useHistory();
    function SearchbarInputHandler(e) {
        if (e.key === 'Enter') {
            const searchedName = searchedNameRef.current.value;
            console.log(searchedName)

            fetch(`https://pokeapi.co/api/v2/pokemon/${searchedName}`).then(resp => resp.json()).then(data => {
                const id = data.id;
                history.push({
                    pathname: '/searchedPokemon',
                    state: id
                })
            })





        }
    }
    return (
        <div className='d-flex justify-content-between align-items-center m-3' >
            <h1>Pokemon</h1>
            <div className=''>
                <input type="text" id='pokemon-searchbar' placeholder='Search for pokemon..' ref={searchedNameRef} onKeyPress={SearchbarInputHandler}/>
            </div>
        </div>
    )
}

export default Searchbar;