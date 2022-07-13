function SearchedPokemon(props) {
    let id = props.location.state

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(resp => resp.json()).then(data => {
        console.log(data)
    })

    return (
        <div>searched pokemon</div>
    )
}

export default SearchedPokemon;