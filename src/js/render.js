import { refs } from './getRefs';
// const refs = getRefs();

function createPokemonItem({ name }) {
  return `<li>${name}</li>`;
}

function createPokemonList(pokemons) {
  return pokemons.map(createPokemonItem).join('');
}

function renderPokemonList(pokemons) {
  refs.pokemonList.insertAdjacentHTML('beforeend', createPokemonList(pokemons));
}

function createPokemonMarkupInModal({
  sprites: { front_shiny, back_shiny },
  name,
}) {
  return `<img src="${front_shiny}" alt="">
        <img src="${back_shiny}" alt="">
        <p>${name}</p>`;
}

function renderPokemonInModal(pokemon) {
  refs.pokemonContainer.innerHTML = '';
  refs.pokemonContainer.insertAdjacentHTML(
    'beforeend',
    `${createPokemonMarkupInModal(pokemon)}`
  );
}

export { renderPokemonList, renderPokemonInModal };
