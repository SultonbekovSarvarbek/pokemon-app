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
              v-if="data.sprites !== undefined"
              :src="data.sprites.front_default"
              alt=""
            />
          </div>

          <figcaption class="card__caption">
            <h1 class="card__name">{{ data.name }}</h1>

            <!-- <table class="card__stats">
              <tbody>
                <tr>
                  <th>HP</th>
                  <td>55</td>
                </tr>
                <tr>
                  <th>Attack</th>
                  <td>55</td>
                </tr>

                <tr>
                  <th>Defense</th>
                  <td>50</td>
                </tr>

                <tr>
                  <th>Special Attack</th>
                  <td>45</td>
                </tr>
                <tr>
                  <th>Special Defense</th>
                  <td>65</td>
                </tr>
                <tr>
                  <th>Speed</th>
                  <td>55</td>
                </tr>
              </tbody>
            </table> -->

            <div class="card__abilities">
              <h4 class="card__ability">
                <span class="card__label">Ability</span>
                <p v-for="(item, index) in data.abilities" :key="item.id">
                  {{ index + 1 }}. {{ item.ability.name }}
                </p>
              </h4>
              <h4 class="card__ability">
                <span class="card__label">Types</span>
                <p v-for="(item, index) in data.types" :key="item.id">
                  {{ index + 1 }}. {{ item.type.name }}
                </p>
              </h4>
            </div>
            <h1 class="card__link">See more</h1>
            <router-view :parentFullPath="this.$route.fullPath"> </router-view>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  async created() {
    await this.$store.dispatch("getPokemonDetails", this.$route.params.id);
  },
  computed: {
    data() {
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