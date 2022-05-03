// Creates IIFE
let pokemonRepository = (function() {

// Creates an array of Pokemon
let pokemonList = [];

// Creates link to URL to complete pokemon list
let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=152";

//Functions

// Adds new Pokemon
function add(pokemon) {
  if (
    typeof pokemon === "object" &&
    "name" in pokemon &&
    "detailsUrl" in pokemon
    ){
    pokemonList.push(pokemon);
} else {
    console.log("Pokemon is incorrect");
  }
}

  // Returns all pokemons
  function getAll() {
    return pokemonList;
  }

  // Creates button of Pokemon
  function addListItem(pokemon){
    let pokemonList = document.querySelector(".list-group");
    let listpokemon = document.createElement("li");
    listpokemon.classList.add("group-list-item");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("btn-primary", "search-button");
    button.setAttribute("data-toggle", "#modal");
    button.setAttribute("data-target", "#pokemonModal");
    listpokemon.append(button);
    pokemonList.append(listpokemon);
    // Event listener that shows object details when button clicked
    button.addEventListener("click", function() {
      showDetails(pokemon);
    });
  }

    //Loads Pokemon from API
    function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
          console.log(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      });
    }

    //Load Pokemon details
    function loadDetails(item) {
      let url = item.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
        }).then (function (details) {
          // Adds details to Pokemons
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
        }).catch(function (e) {
            console.error(e);
       });
      }

  //Loads data of Pokemon
  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
      showModal(pokemon)
    });
  }

// Shows pokemon modal
 function showModal (pokemon) {
   let modalTitle = $(".modal-title");
   let modalImage = $(".modal-image");
   let modalBody = $(".modal-body");
   let modalFooter = $(".modal-footer");


   let titleElement = $("<h2>");
   titleElement.text(pokemon.name);

   let imageElement = $("<img class=>");
   imageElement.attr("src", pokemon.imageUrl);

   let heightElement = $("<p>");
   heightElement.text("Height: " + pokemon.height);

   // Creates element for type in modal
   let typesElement = $("<p>");
   typesElement.text("Types: " + pokemon.types.map(types => types.type.name).join(", "));


  // Clears existing content of modal
  modalImage.empty();
  modalTitle.empty();
  modalBody.empty();
  modalFooter.empty();

//  modalBody.append(imageElement);
  modalBody.append(titleElement);
  modalImage.append(imageElement);
  modalFooter.append(heightElement);
  modalFooter.append(typesElement);

  $("#pokemonModal").modal("toggle");

}

// Add event listener to search Bar
let searchInput = document.querySelector("#search-bar");

searchInput.addEventListener("input", function() {
  let pokeList = document.querySelectorAll("ul.pokemon-list li");
  let value = searchInput.value.toUpperCase();

  pokeList.forEach(function (pokemon) {
    if (pokemon.innerText.toUpperCase().indexOf(value) > -1)
    {
      pokemon.style.display = "list-item";
    } else {
      pokemon.style.display = "none";
    }
  });
});

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();
// End of IIFE

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
