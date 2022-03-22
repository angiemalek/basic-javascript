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
]

// Loop to load pokemon list
for (let i = 0; i < pokemonList.length; i++);
  console.log(pokemonList);

// Prints pokemon names to index
  document.write(pokemonList[0].name + ' height is 0.7 ');
  document.write(pokemonList[1].name + ' height is 0.3 ');
  document.write(pokemonList[2].name + ' height is 5.5 ');
  document.write(pokemonList[3].name + ' height is 7.5 ');
  document.write(pokemonList[4].name + ' height is 0.4 ');
