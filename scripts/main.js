const txtName = document.getElementById("pokemonName");
const container = document.getElementById("container");

async function ferchPokemon(name){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemon = await response.json();
    // console.log(txtName.value);
    // console.log(response);
    // console.log(pokemon);
    // console.log(pokemon.name);
    return await pokemon;
}

async function getPokemon(){
    container.innerHTML = "";
    const pokemon = await ferchPokemon(txtName.value);
    // console.log(pokemon);
    const title = document.createElement("h3");
    title.innerText = pokemon.name;
    container.appendChild(title);
    
    const image = document.createElement("img");
    image.src = `https://img.pokemondb.net/artwork/${pokemon.name}.jpg`;
    image.alt = "Pokemon Image"
    container.appendChild(image);
    
    // console.log(pokemon.types[0].type.name);
    // console.log("Type: " + pokemon.types[0].type.name + (pokemon.types.length > 1 ? " and " + pokemon.types[1].type.name : ""))
    const type = document.createElement("p");
    type.innerText = "Type: "
    + pokemon.types[0].type.name
    + (pokemon.types.length > 1 ? " and " + pokemon.types[1].type.name : "");
    container.appendChild(type);
}