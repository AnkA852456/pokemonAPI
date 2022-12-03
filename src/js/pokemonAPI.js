export default class PokemonAPI {
  constructor() {
    this.url = 'https://pokeapi.co/api/v2/pokemon/';
    this.name = '';
  }

  fetchPokemons() {
    return fetch(`${this.url}`).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }

  getPokemonByName(name) {
    return fetch(`${this.url}${name}`).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }
}
