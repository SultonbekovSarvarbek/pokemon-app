import Vue from 'vue';
import axios from 'axios';
import Vuex from 'vuex';
axios.defaults.baseURL = 'https://pokeapi.co/api/v2/';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allPokemons: {},
    allPokemonsImg: [],
    allPokemonDetails: {},
    setPokemonAbilities: {},
  },
  mutations: {
    setAllPokemons(state, payload) {
      payload.forEach((element, index) => {
        element.id = index + 1;
      });

      state.allPokemons = payload;
    },
    setAllPokemonsImg(state, payload) {
      state.allPokemonsImg = [...payload];
    },
    setAllPokemonDetails(state, payload) {
      state.allPokemonDetails = payload;
    },
    setPokemonAbilities(state, payload) {
      state.setPokemonAbilities = payload;
    },
  },
  actions: {
    async getAllPokemons({ commit }) {
      await axios
        .get('pokemon?limit=20')
        .then((res) => {
          commit('setAllPokemons', res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getAllPokemonsImg({ commit }) {
      await axios
        .get('https://picsum.photos/v2/list?limit=20')
        .then((res) => {
          commit('setAllPokemonsImg', res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async getPokemonDetails({ commit }, payload) {
      await axios
        .get('pokemon/' + payload + '/')
        .then((res) => {
          commit('setAllPokemonDetails', res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getPokemonAbilities({ commit }, payload) {
      await axios
        .get('ability/' + payload + '/')
        .then((res) => {
          commit('setPokemonAbilities', res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  getters: {
    getAllPokemons(state) {
      return state.allPokemons;
    },
    getAllPokemonsImg(state) {
      return state.allPokemonsImg;
    },
    getAllPokemonDetails(state) {
      return state.allPokemonDetails;
    },
    getPokemonAbilities(state) {
      return state.setPokemonAbilities;
    },
  },
  modules: {},
});
