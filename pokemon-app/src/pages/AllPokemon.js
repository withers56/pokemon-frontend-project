function AllPokemon() {
    function getPokis() {
        fetch('https://pokeapi.co/api/v2/pokemon/1').then((resp) => resp.json())
            .then((data) => {
                window.localStorage.setItem(data.name, JSON.stringify(data));
                console.log(JSON.parse(window.localStorage.getItem(data.name)))
            })
    }
    return (
        <div>this is where all the pokemon will go
            <button onClick={getPokis}>search</button>
        </div>

    )
}

export default AllPokemon;