const txtName = document.getElementById("pokemonName");

async function getPokemon(){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${txtName.value}`);
    const pokemon = await response.json();
    // console.log(txtName.value);
    // console.log(response);
    // console.log(pokemon);
    console.log(pokemon.name);
}