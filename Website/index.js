// Pokemon Data
const pokemonData = [
    { name: "bulbasaur", sprite: "Pokemon_Images/bulbasaur.png" },
    { name: "ivysaur", sprite: "Pokemon_Images/ivysaur.png" },
    { name: "venusaur", sprite: "Pokemon_Images/venusaur.png" },
    { name: "charmander", sprite: "Pokemon_Images/charmander.png" },
    { name: "charmeleon", sprite: "Pokemon_Images/charmeleon.png" },
    { name: "charizard", sprite: "Pokemon_Images/charizard.png" },
    { name: "squirtle", sprite: "Pokemon_Images/squirtle.png" },
    { name: "wartortle", sprite: "Pokemon_Images/wartortle.png" },
    { name: "blastoise", sprite: "Pokemon_Images/blastoise.png" },
    { name: "caterpie", sprite: "Pokemon_Images/caterpie.png" },
    { name: "metapod", sprite: "Pokemon_Images/metapod.png" },
    { name: "butterfree", sprite: "Pokemon_Images/butterfree.png" },
    { name: "weedle", sprite: "Pokemon_Images/weedle.png" },
    { name: "kakuna", sprite: "Pokemon_Images/kakuna.png" },
    { name: "beedrill", sprite: "Pokemon_Images/beedrill.png" },
    { name: "pidgey", sprite: "Pokemon_Images/pidgey.png" },
    { name: "pidgeotto", sprite: "Pokemon_Images/pidgeotto.png" },
    { name: "pidgeot", sprite: "Pokemon_Images/pidgeot.png" },
    { name: "rattata", sprite: "Pokemon_Images/rattata.png" },
    { name: "raticate", sprite: "Pokemon_Images/raticate.png" },
    { name: "spearow", sprite: "Pokemon_Images/spearow.png" },
    { name: "fearow", sprite: "Pokemon_Images/fearow.png" },
    { name: "ekans", sprite: "Pokemon_Images/ekans.png" },
    { name: "arbok", sprite: "Pokemon_Images/arbok.png" },
    { name: "pikachu", sprite: "Pokemon_Images/pikachu.png" },
    { name: "raichu", sprite: "Pokemon_Images/raichu.png" },
    { name: "sandshrew", sprite: "Pokemon_Images/sandshrew.png" },
    { name: "sandslash", sprite: "Pokemon_Images/sandslash.png" },
    { name: "nidoran-f", sprite: "Pokemon_Images/nidoran-f.png" },
    { name: "nidorina", sprite: "Pokemon_Images/nidorina.png" },
    { name: "nidoqueen", sprite: "Pokemon_Images/nidoqueen.png" },
    { name: "nidoran-m", sprite: "Pokemon_Images/nidoran-m.png" },
    { name: "nidorino", sprite: "Pokemon_Images/nidorino.png" },
    { name: "nidoking", sprite: "Pokemon_Images/nidoking.png" },
    { name: "clefairy", sprite: "Pokemon_Images/clefairy.png" },
    { name: "clefable", sprite: "Pokemon_Images/clefable.png" },
    { name: "vulpix", sprite: "Pokemon_Images/vulpix.png" },
    { name: "ninetales", sprite: "Pokemon_Images/ninetales.png" },
    { name: "jigglypuff", sprite: "Pokemon_Images/jigglypuff.png" },
    { name: "wigglytuff", sprite: "Pokemon_Images/wigglytuff.png" },
    { name: "zubat", sprite: "Pokemon_Images/zubat.png" },
    { name: "golbat", sprite: "Pokemon_Images/golbat.png" },
    { name: "oddish", sprite: "Pokemon_Images/oddish.png" },
    { name: "gloom", sprite: "Pokemon_Images/gloom.png" },
    { name: "vileplume", sprite: "Pokemon_Images/vileplume.png" },
    { name: "paras", sprite: "Pokemon_Images/paras.png" },
    { name: "parasect", sprite: "Pokemon_Images/parasect.png" },
    { name: "venonat", sprite: "Pokemon_Images/venonat.png" },
    { name: "venomoth", sprite: "Pokemon_Images/venomoth.png" },
    { name: "diglett", sprite: "Pokemon_Images/diglett.png" },
    { name: "dugtrio", sprite: "Pokemon_Images/dugtrio.png" },
    { name: "meowth", sprite: "Pokemon_Images/meowth.png" },
    { name: "persian", sprite: "Pokemon_Images/persian.png" },
    { name: "psyduck", sprite: "Pokemon_Images/psyduck.png" },
    { name: "golduck", sprite: "Pokemon_Images/golduck.png" },
    { name: "mankey", sprite: "Pokemon_Images/mankey.png" },
    { name: "primeape", sprite: "Pokemon_Images/primeape.png" },
    { name: "growlithe", sprite: "Pokemon_Images/growlithe.png" },
    { name: "arcanine", sprite: "Pokemon_Images/arcanine.png" },
    { name: "poliwag", sprite: "Pokemon_Images/poliwag.png" },
    { name: "poliwhirl", sprite: "Pokemon_Images/poliwhirl.png" },
    { name: "poliwrath", sprite: "Pokemon_Images/poliwrath.png" },
    { name: "abra", sprite: "Pokemon_Images/abra.png" },
    { name: "kadabra", sprite: "Pokemon_Images/kadabra.png" },
    { name: "alakazam", sprite: "Pokemon_Images/alakazam.png" },
    { name: "machop", sprite: "Pokemon_Images/machop.png" },
    { name: "machoke", sprite: "Pokemon_Images/machoke.png" },
    { name: "machamp", sprite: "Pokemon_Images/machamp.png" },
    { name: "bellsprout", sprite: "Pokemon_Images/bellsprout.png" },
    { name: "weepinbell", sprite: "Pokemon_Images/weepinbell.png" },
    { name: "victreebel", sprite: "Pokemon_Images/victreebel.png" },
    { name: "tentacool", sprite: "Pokemon_Images/tentacool.png" },
    { name: "tentacruel", sprite: "Pokemon_Images/tentacruel.png" },
    { name: "geodude", sprite: "Pokemon_Images/geodude.png" },
    { name: "graveler", sprite: "Pokemon_Images/graveler.png" },
    { name: "golem", sprite: "Pokemon_Images/golem.png" },
    { name: "ponyta", sprite: "Pokemon_Images/ponyta.png" },
    { name: "rapidash", sprite: "Pokemon_Images/rapidash.png" },
    { name: "slowpoke", sprite: "Pokemon_Images/slowpoke.png" },
    { name: "slowbro", sprite: "Pokemon_Images/slowbro.png" },
    { name: "magnemite", sprite: "Pokemon_Images/magnemite.png" },
    { name: "magneton", sprite: "Pokemon_Images/magneton.png" },
    { name: "farfetchd", sprite: "Pokemon_Images/farfetchd.png" },
    { name: "doduo", sprite: "Pokemon_Images/doduo.png" },
    { name: "dodrio", sprite: "Pokemon_Images/dodrio.png" },
    { name: "seel", sprite: "Pokemon_Images/seel.png" },
    { name: "dewgong", sprite: "Pokemon_Images/dewgong.png" },
    { name: "grimer", sprite: "Pokemon_Images/grimer.png" },
    { name: "muk", sprite: "Pokemon_Images/muk.png" },
    { name: "shellder", sprite: "Pokemon_Images/shellder.png" },
    { name: "cloyster", sprite: "Pokemon_Images/cloyster.png" },
    { name: "gastly", sprite: "Pokemon_Images/gastly.png" },
    { name: "haunter", sprite: "Pokemon_Images/haunter.png" },
    { name: "gengar", sprite: "Pokemon_Images/gengar.png" },
    { name: "onix", sprite: "Pokemon_Images/onix.png" },
    { name: "drowzee", sprite: "Pokemon_Images/drowzee.png" },
    { name: "hypno", sprite: "Pokemon_Images/hypno.png" },
    { name: "krabby", sprite: "Pokemon_Images/krabby.png" },
    { name: "kingler", sprite: "Pokemon_Images/kingler.png" },
    { name: "voltorb", sprite: "Pokemon_Images/voltorb.png" }
];

function fetchData() {
    try {
        const pokemonName = document.getElementById("PokemonName").value.toLowerCase();
        
        // Find the Pokémon in the local list
        const pokemon = pokemonData.find(p => p.name === pokemonName);

        if (!pokemon) {
            throw new Error("Pokémon not found in the local list");
        }

        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemon.sprite;
        imgElement.style.display = "block";
    } 
    catch (error) {
        console.error(error);
    }
}


















//Weather Data

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "0ec4a479c6137e078efcd3c72b9b8348";


//Submit Button Function

weatherForm.addEventListener("submit",async event => {

    event.preventDefault();

    const city = cityInput.value;

    if(city){

        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }

    }
    else{
        displayError("Please Enter A City!");
        
    }

});

//API Find City

async function getWeatherData(city){

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    console.log(response);

    if(!response.ok){
        throw new Error("Could not find Weather Data...");
    }

    return await response.json();

}

//Weather Information

function displayWeatherInfo(data){

    const {name: city, 
          main: {temp, humidity}, 
          weather: [{description, id}]} = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}

//Function That Shows the Emoji depends in the Weather

function getWeatherEmoji(weatherId){

    switch(true){
        case(weatherId >= 200 && weatherId < 300):
            return "⛈️";
        case(weatherId >= 300 && weatherId < 400):
            return "🌧️";
        case(weatherId >= 500 && weatherId < 600):
            return "☔";
        case(weatherId >= 600 && weatherId < 700):
            return "❄️";
        case(weatherId >= 700 && weatherId < 800):
            return "🌫️";
        case(weatherId === 800):
            return "☀️";
        case(weatherId >= 801 && weatherId < 810):
            return "☁️";
        default:
            return "❓";
    }

}

//Display Error Function

function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);

}



