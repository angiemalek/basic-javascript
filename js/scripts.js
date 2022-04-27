// Creates IIFE
let pokemonRepository = (function() {

  // Creates an array of Pokemon
  let pokemonList = [];

  // Creates link to URL to complete pokemon list
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  // modal container
  let modalContainer = document.querySelector('#modal-container');
  //Functions

  // Adds new Pokemon
  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon &&
      'detailsUrl' in pokemon
     ){
      pokemonList.push(pokemon);
  } else {
      console.log('Pokemon is incorrect');
  }
}

  // Returns all pokemons
  function getAll() {
    return pokemonList;
  }

  // Creates button of Pokemon
  function addListItem(pokemon){
    let pokemonList = document.querySelector('.list-group');
    let listpokemon = document.createElement('li');
    listpokemon.classList.add('group-list-item');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('btn', 'btn-info', 'btn-lg', 'w-100');
    buttong.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#exampleModal');
    listpokemon.append(button);
    pokemonList.append(listpokemon);
    // Event listener that shows object details when button clicked
    button.addEventListener('click', function() {
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
 function showModal(pokemon) {
   let modalBody = $('.modal-body');
   let modalTitle = $('.modal-title');
   let modalHeader = $('.modal-header');

   // Clears existing content of modal
   modalTitle.empty();
   modalBody.empty();

   // Creates element for name in modal
   let titleElement = $('<h1>' + pokemon.name + '</h1>');

   // Creates element for height in modal
   let heightElement = $('<p>' + 'Height: ' + pokemon.height + '</p>');

   // Creates element for type in modal
   let typesElement = $('<p>' + 'Types :' + pokemon.types + '</p>');

   pokemon.types.forEach((types, numberOfTypes) => {
     numberOfTypes = pokemon.types.pokemon;

     if (numberOfTypes === 1) {
       typesElement.innerText += types.types.name;
     } else {
       typesElement.innerText += types.types.name + ' ';
     }
   })

   // Creates image in modal
   let imageElement = $('<img class='modal-img'>');
   imageElement.attr('src', pokemon.imageUrl);


   modalTitle.append(titleElement);
   modalBody.append(imageElement);
   modalBody.append(heightElement);
   modalBody.append(typesElement);
 }

  // Search Bar Function
  $(document).ready(function(){
  $('#myInput').on('keyup', function() {
  let value = $(this).val().toLowerCase();
  $(".search-button").filter(function() {
  $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  });
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




  // TO DO: Delete code once app completed

  //  for loop executing name and height of pokemon
  //   for (let i=0; i < pokemonList.length; i++);
  //   pokemonRepository.getAll().forEach(function(pokemon) {
  //   pokemonRepository.addListItem(pokemon);
  // });

  // for each loop listing pokemon details
  //   pokemonList.forEach(function(pokemonRepository){
  //    console.log(pokemon.name  +  ' is ' + pokemon.height);
  //    document.write('<p>' + pokemon.name + ' is ' + '(' + pokemon.height + ')' + '</p>')
  //  });

  // for loop to print pokemon
  //   if (pokemonList[i].height >= 0.5){
  //      document.write('<p>' + pokemonList[i].name + ' (' + pokemonList[i].height + ')' + ' - Wow That\'s Big!</p>');
  //     } else if (pokemonList[i].height <=0.5 )
  //      document.write('<p>' + pokemonList[i].name + ' (' + pokemonList[i].height + ')' + ' - Wow That\'s Tiny!</p>');
  //   };

  //  Conditonal for pokemon
  //  if (pokemon.height >= 0.5) {
  //    document.write('<p>' + pokemon.name + ' is ' + '(' + pokemon.height + ')' + ' Wow That\'s Big!</p>');
  //  } else if (pokemon.height < 0.5) {
  //    document.write('<p>' + pokemon.name + ' is ' + '(' + pokemon.height + ')' + ' Wow That\'s Tiny!</p>')
  // };



  // TO DO: Delete code once app completed

  //  for loop executing name and height of pokemon
  //   for (let i=0; i < pokemonList.length; i++);
  //   pokemonRepository.getAll().forEach(function(pokemon) {
  //   pokemonRepository.addListItem(pokemon);
  // });

  // for each loop listing pokemon details
  //   pokemonList.forEach(function(pokemonRepository){
  //    console.log(pokemon.name  +  ' is ' + pokemon.height);
  //    document.write('<p>' + pokemon.name + ' is ' + '(' + pokemon.height + ')' + '</p>')
  //  });

  // for loop to print pokemon
  //   if (pokemonList[i].height >= 0.5){
  //      document.write('<p>' + pokemonList[i].name + ' (' + pokemonList[i].height + ')' + ' - Wow That\'s Big!</p>');
  //     } else if (pokemonList[i].height <=0.5 )
  //      document.write('<p>' + pokemonList[i].name + ' (' + pokemonList[i].height + ')' + ' - Wow That\'s Tiny!</p>');
  //   };

  //  Conditonal for pokemon
  //  if (pokemon.height >= 0.5) {
  //    document.write('<p>' + pokemon.name + ' is ' + '(' + pokemon.height + ')' + ' Wow That\'s Big!</p>');
  //  } else if (pokemon.height < 0.5) {
  //    document.write('<p>' + pokemon.name + ' is ' + '(' + pokemon.height + ')' + ' Wow That\'s Tiny!</p>')
  // };
