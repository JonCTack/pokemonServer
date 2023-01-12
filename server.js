const express = require('express')

const app = express()

port = 5000;

app.use(express.static('public'))

const pokemon = [
    {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur", age: 3},
    {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur", age: 4},
    {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur", age: 5},
    {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander", age: 2},
    {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard", age: 7},
    {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle", age: 8},
    {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle", age: 6}
];

app.get("/get_pokemon_data", (req,res) => {
    res.send(pokemon)
})

app.listen(port, () => {
    console.log(`Server is Listening on ` + port)
})