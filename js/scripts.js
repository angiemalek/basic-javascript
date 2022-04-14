// Creates IIFE
let pokemonRepository = (function() {

  // Creates an array of Pokemon
  let pokemonList = [];

  // Creates link to URL to complete pokemon list
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  //Functions

  // Adds new Pokemon
  function add(pokemon) {
      pokemonList.push(pokemon);
  }

  // Returns all pokemons
  function getAll() {
    return pokemonList;
  }

  // Creates button of Pokemon
  function addListItem(pokemon){
    let pokemonList =
      document.querySelector('.pokemon-list');
    let listpokemon =
      document.createElement('li');
    let button =
      document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        button.addEventListener('click', function() {
          showDetails(pokemon);
      })
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
    loadDetails(pokemon).then(function () {
      console.log();
    })
  };
/*
// Shows pokemon modal
 function showModal(title, text) {
   let modalContainer = document.querySelector('#modal-container');
   modalContainer.classList.add('is-visible');
   // Clears all existing modal content
   modalContainer.innerHTML = '';

   let modal = document.createElement('div');
   modal.classList.add('modal');

   // Add new modal content
   let closeButtonElement = document.createElement('button');
   closeButtonElement.classList.add('modal-close');
   closeButtonElement.innerText = 'Close';
   closeButton.addEventListener('click', hideModal);

   let titleElement = document.createElement('h1');
   titleElement.innerText = title;

   let contentElement = document.createElement('p');
   contentElement.innerText = text;

   modal.appendChild(closeButtonElement);
   modal.appendChild(titleElement);
   modal.appendChild(contentElement);
   modalContainer.appendChild(modal);

   modalContiner.classList.add('is-visible');
 }

 document.querySelector('#show-modal').addEventListener('click', () => {
   showModal('Modal title', 'This is the modal content!');
 });

 // Hides the modal
 function hideModal() {
   let modalContainer = document.querySelector('#modal-container');
   modalContainer.classList.remove('is-visible');
 }

// Closes modal with escape key
 window.addEventListener('keydown', (e) => {
   let modalContainer = document.querySelector('#modal-container');
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
 });

// Closes modal when clicking outside of modal Container
modalContainer.addEventListener('click', (e) => {
  let target = e.target;
  if (target === modalContainer) {
    hideModal();
  }
}); */

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
