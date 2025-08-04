const txtName = document.getElementById("pokemonName");
const container = document.getElementById("container");

async function fetchPokemon(name){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!response.ok) throw new Error("Can't fetch data. Invalid name or ID");
    const pokemon = await response.json();
    return await pokemon;
}

async function getPokemon(){
    container.innerHTML = "";

    try{
        if(txtName.value.trim() === "") throw new Error("Please enter ID or Name");

        const pokemon = await fetchPokemon(txtName.value);
        
        const title = document.createElement("h2");
        title.innerText = pokemon.name;
        container.appendChild(title);
        
        const image = document.createElement("img");
        image.src = `https://img.pokemondb.net/artwork/${pokemon.name}.jpg`;
        image.alt = "Pokemon Image"
        container.appendChild(image);
        
        const type = document.createElement("p");
        type.innerText = "Type: "
        + pokemon.types[0].type.name
        + (pokemon.types.length > 1 ? " and " + pokemon.types[1].type.name : "");
        container.appendChild(type);
    }catch (e){
        const error = document.createElement("p");
        error.innerText = e;
        error.classList.add("errorMessage");
        container.appendChild(error);
    }
}