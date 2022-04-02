// creates IIFE
let pokemonRepository = (function() {

// Creates an array of Pokemon
let pokemonList = [
  {
    name: 'bulbasaur',
    height: 0.7,
    weight: 6.9,
    type: ['grass', 'poison']
  },

  {
    name: 'weedle',
    height: 0.3,
    weight: 3.2,
    type: ['bug', 'poison']
  },

  {
    name: 'jigglypuff',
    height: 0.5,
    weight: 5.5,
    type: ['fairy', 'normal']
  },

  {
    name: 'zubat',
    height: 0.8,
    weight: 7.5,
    type: ['poison', 'flying']
  },

  {
    name: 'exeggcute',
    height: 0.4,
    weight: 2.5,
    type: ['psychic', 'grass']
  },
];

//Functions
function add(pokemon){
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({name: 'squirtle'});
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon) {
//Conditonal for Pokemon
  if (pokemon.height >= 0.5) {
    document.write('<p>' + pokemon.name + ' is ' + '(' + pokemon.height + ')</p>');
  } else if (pokemon.height < 0.5) {
    document.write('<p>' + pokemon.name + ' is ' + '(' + pokemon.height + ')' + '</p>')
  }
});




//  for loop executing name and height of pokemon
//   for (let i=0; i < pokemonList.length; i++);
//   pokemonRepository.getAll().forEach(function(pokemon) {
//   pokemonRepository.addListItem(pokemon);
// });

// for each loop listing pokemon details
//   pokemonList.forEach(function(pokemonRepository){
//   console.log(pokemon.name  +  ' is ' + pokemon.height);
//   document.write('<p>' + pokemon.name + ' is ' + '(' + pokemon.height + ')' + '</p>')
// });

// for loop to print pokemon
/*   if (pokemonList[i].height >= 0.5){
     document.write('<p>' + pokemonList[i].name + ' (' + pokemonList[i].height + ')' + ' - Wow That\'s Big!</p>');
     } else if (pokemonList[i].height <=0.5 )
     document.write('<p>' + pokemonList[i].name + ' (' + pokemonList[i].height + ')' + ' - Wow That\'s Tiny!</p>');
   };*/
