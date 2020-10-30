<template>
  <div>
    <div class="container">
      <div class="search__container">
        <p class="search__title">Search</p>
        <input
          v-model="search"
          class="search__input"
          type="text"
          placeholder="Search"
        />
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
      <div v-else class="notfound">
        Sorry, no results were found for your search.
      </div>
    </div>
  </div>
</template>

<script>
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
    outline: 0;
    &__item {
      cursor: pointer;
      outline: none;
      &:focus {
        outline: 0;
      }
      img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
      }
    }
  }
}

.search {
  &__title {
    font-size: 1.8rem;
    font-weight: bold;
    text-align: center;
    color: #3b448e;
    margin-bottom: 1.3rem;
  }
  &__input {
    width: 100%;
    padding: 1rem 1.5rem;
    background-color: transparent;
    transition: transform 250ms ease-in-out;
    font-size: 1rem;
    color: #575756;
    background-color: transparent;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: 95% center;
    border-radius: 50px;
    border: 1px solid #575756;
    transition: all 250ms ease-in-out;
  }
  &__input::placeholder {
    color: #3b448e;
    font-weight: bold;
    letter-spacing: 0.1rem;
  }
  &__input:hover,
  &__input:focus {
    padding: 1rem 0;
    outline: 0;
    border: 1px solid transparent;
    border-bottom: 1px solid #575756;
    border-radius: 0;
    background-position: 100% center;
  }
}
.notfound {
  margin: 2rem 0;
}
</style>