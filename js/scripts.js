// creates IIFE
let pokemonRepository = (function() {

  // Creates an array of Pokemon
  let pokemonList = [
    {
      name: 'Bulbasaur',
      height: 0.7,
      weight: 6.9,
      type: ['Grass', 'Poison']
    },

    {
      name: 'Weedle',
      height: 0.3,
      weight: 3.2,
      type: ['Bug', 'Poison']
    },

    {
      name: 'Jigglypuff',
      height: 0.5,
      weight: 5.5,
      type: ['Fairy', 'Normal']
    },

    {
      name: 'Zubat',
      height: 0.8,
      weight: 7.5,
      type: ['Poison', 'Flying']
    },

    {
      name: 'Exeggcute',
      height: 0.4,
      weight: 2.5,
      type: ['Psychic', 'Grass']
    },
  ];

  //Functions
  function add(pokemon){
      pokemonList.push(pokemon);
  }

// returns all pokemons
  function getAll() {
    return pokemonList;
  }

  // Function manipulating the DOM
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
        button.addEventListener('click', function(){
          showDetails(pokemon);
        })
      }

  function showDetails(pokemon){
    console.log(pokemon);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
  };
})();

  pokemonRepository.add({name: 'Squirtle'});

  console.log(pokemonRepository.getAll());

  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
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
