<template>
  <div>
    <div class="container">
      <div class="search">
        <h2>Search</h2>
        <div class="search-input">
          <input v-model="search" placeholder="Search" type="text" />
        </div>
      </div>

      <div
        class="cards"
        v-if="filteredList !== undefined && filteredList.length !== 0"
      >
        <router-link
          tag="div"
          :to="'/pokemondetails/' + item.id"
          class="card__item"
          :class="`card__item--${index + 1}`"
          v-for="(item, index) in filteredList"
          :key="item.id"
          @click="pokemondetails(index + 1)"
        >
          <figure class="card card--normal">
            <div class="card__image-container">
              <div v-lazy-container="{ selector: 'img' }">
                <img
                  class="card__image"
                  v-if="getAllPokemonsImg[index] !== undefined"
                  :data-src="`${getAllPokemonsImg[index].download_url}`"
                  alt=""
                />
              </div>
            </div>

            <figcaption class="card__caption">
              <h1 class="card__name">{{ item.name }}</h1>

              <div class="card__abilities">
                <button class="card__button">View card</button>
              </div>
            </figcaption>
          </figure>
        </router-link>
      </div>
      <div v-else>No data</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return { search: "" };
  },
  created() {
    this.$store.dispatch("getAllPokemons");
    this.$store.dispatch("getAllPokemonsImg");
  },
  computed: {
    getAllPokemons() {
      return this.$store.getters.getAllPokemons;
    },
    getAllPokemonsImg() {
      return this.$store.getters.getAllPokemonsImg;
    },
    filteredList() {
      if (Object.keys(this.getAllPokemons).length) {
        return this.getAllPokemons.filter((x) => {
          return x.name.match(this.search);
        });
      }
    },
  },
  methods: {
    pokemondetails(id) {
      console.log(id);
    },
  },
};
</script>
<style lang="less" scoped>
.search {
  text-align: left;
  margin: 0;
  &-input {
    border: 1px solid #e6e6e6;
    margin-bottom: 2rem;
    width: 250px;
  }
  input {
    padding: 0.8rem;
    border: none;

    background-image: none;
    background-color: rgb(240, 240, 240);
    color: #333;
    width: 100%;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    outline: none;
  }
}
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  grid-auto-rows: auto;
  grid-gap: 1rem;
  grid-template-rows: repeat(auto, auto);
  .card__item--8 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
  }
  .card__item--13 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 5;
  }

  .card {
    &__content {
      background-color: #9fcfff;
    }
    &__item {
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
      }
    }
  }
}
</style>