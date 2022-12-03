import { Notify } from 'notiflix';
import PokemonAPI from './js/pokemonAPI';
import { renderPokemonList, renderPokemonInModal } from './js/render';
import { refs } from './js/getRefs';

const pokemonAPI = new PokemonAPI();

pokemonAPI.fetchPokemons().then(({ count, results }) => {
  Notify.success(`We've found ${count} pokemons!!!`);
  renderPokemonList(results);
});

refs.pokemonList.addEventListener('click', onPokemon);
refs.closeModalBtn.addEventListener('click', onCloseModalButtonClick);

function onPokemon(e) {
  const name = e.target.textContent;
  pokemonAPI.getPokemonByName(name).then(response => {
    console.log(response);
    openModal();
    renderPokemonInModal(response);
  });
}

function openModal() {
  refs.backdrop.classList.remove('is-hidden');
}

function onCloseModalButtonClick() {
  closeModal();
}

function closeModal() {
  refs.backdrop.classList.add('is-hidden');
}
