<template>
  <div>
    <div class="container">
      <div class="button">
        <div class="btn backeffect" @click="goback" data-sm-link-text="Go Back">
          <span>Go Back</span>
        </div>
      </div>

      <div>
        <figure class="card card--normal">
          <div class="card__image-container">
            <img
              v-if="getDetails.sprites !== undefined"
              :src="getDetails.sprites.front_default"
              alt=""
            />
          </div>

          <figcaption class="card__caption">
            <h1 class="card__name">{{ getDetails.name }}</h1>
            <div class="card__abilities">
              <h4 class="card__ability">
                <span class="card__label">Ability</span>
                <p v-for="(item, index) in getDetails.abilities" :key="item.id">
                  {{ index + 1 }}. {{ item.ability.name }}
                </p>
              </h4>
              <h4 class="card__ability">
                <span class="card__label">Types</span>
                <p v-for="(item, index) in getDetails.types" :key="item.id">
                  {{ index + 1 }}. {{ item.type.name }}
                </p>
              </h4>
            </div>
            <h1 class="card__link">See more</h1>
            <pokemonAbilitiesLink :parentFullPath="this.$route.fullPath" />
            <!-- <router-view :parentFullPath="this.$route.fullPath"> </router-view> -->
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import pokemonAbilitiesLink from "../components/pokemonAbilitiesLink";
export default {
  name: "pokemonDetails",
  data() {
    return {};
  },
  components: {
    pokemonAbilitiesLink,
  },
  async created() {
    await this.$store.dispatch("getPokemonDetails", this.$route.params.id);
  },
  computed: {
    getDetails() {
      return this.$store.getters.getAllPokemonDetails;
    },
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
img {
  display: inline-block;
  margin: auto;
  max-height: 150px;
}
</style>