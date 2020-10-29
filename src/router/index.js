import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../views/Home.vue';
// PokemonDetails
import pokemonDetails from '../views/pokemonDetails';
// PokemonAbilities
import pokemonAbilitiesLink from '../views/pokemonAbilitiesLink';
import pokemonAbilities from '../views/pokemonAbilities';

Vue.use(VueRouter);

const routes = [
  {
    path: '/allpokemons',
    name: 'Home',
    component: home,
  },
  {
    path: '/pokemondetails/:id',

    component: pokemonDetails,
    children: [
      {
        path: '/',
        component: pokemonAbilitiesLink,
      },
    ],
  },
  {
    path: '/pokemondetails/:id/abilities/:id',
    component: pokemonAbilities,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
