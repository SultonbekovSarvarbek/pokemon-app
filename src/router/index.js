import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../views/Home.vue';
// PokemonDetails
import pokemonDetails from '../views/pokemonDetails';
// PokemonAbilitiesLink
import pokemonAbilitiesLink from '../components/pokemonAbilitiesLink';
// pokemonAbilities
import pokemonAbilities from '../views/pokemonAbilities';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home,
  },
  {
    path: '/pokemondetails/:id',
    component: pokemonDetails,
  },
  {
    path: '/pokemondetails/:id/abilities/:abilitiesid',
    component: pokemonAbilities,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
