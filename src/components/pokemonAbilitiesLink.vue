<template>
  <div>
    <div
      class="card__details-links"
      v-for="(item, index) in getData.abilities"
      :key="item.id"
    >
      <router-link
        :to="parentFullPath + '/abilities/' + filterUrl(item.ability.url)"
        >{{ index + 1 }}. See abilities
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "pokemonAbilitiesLink",
  data() {
    return {
      data: {},
    };
  },
  async created() {
    await this.$store.dispatch("getPokemonDetails", this.$route.params.id);
  },
  computed: {
    getData() {
      return this.$store.getters.getAllPokemonDetails;
    },
  },
  methods: {
    filterUrl(val) {
      if (val !== null && val !== undefined) {
        return val.split("/").join("").slice(-2);
      }
    },
  },
  props: {
    parentFullPath: String,
  },
};
</script>

<style scoped lang="less">
.card__details-links {
  background-color: rgb(121, 103, 157);
  border-radius: 7px;
  transition: all 0.2s;
  font-weight: bold;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
  &:hover {
    transition: all 0.2s;
    background-color: rgb(87, 68, 125);
    a {
      color: rgb(228, 228, 228);
    }
  }
  a {
    padding: 0.4rem;
    display: block;
    text-decoration: none;
    color: rgb(208, 208, 208);
  }
}
</style>