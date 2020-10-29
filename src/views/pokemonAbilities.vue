<template>
  <div>
    <div class="container">
      <div class="button">
        <div class="btn backeffect" @click="goback" data-sm-link-text="Go Back">
          <span>Go Back</span>
        </div>
      </div>
      <div class="cards__wrapper">
        <figure
          class="card card--normal"
          v-for="(item, index) in getAbilities.effect_entries"
          :key="item.id"
        >
          <figcaption class="card__caption">
            <div class="card__stats">
              <div class="card__number">{{ index + 1 }}</div>
              <div class="card__content">
                <p class="card__title">Effect:</p>
                <p>{{ item.effect }}</p>
              </div>

              <div class="card__content">
                <p class="card__title">Short effect:</p>
                <p>{{ item.short_effect }}</p>
              </div>
            </div>
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
  created() {
    this.$store.dispatch("getPokemonAbilities", this.$route.params.id);
  },
  computed: {
    getAbilities() {
      return this.$store.getters.getPokemonAbilities;
    },
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped lang="less">
.pokemons__wrapper {
  display: flex;
}
.cards__wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.card {
  width: 49%;
  transform: translateY(0px) rotate(0deg);
  display: block;
  position: relative;
  overflow: hidden;
  &__content:not(:last-child) {
    margin-bottom: 1.5rem;
    .table__title {
      margin-bottom: 0.9rem;
    }
  }
  &__title {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  &__number {
    position: absolute;
    font-size: 17rem;
    top: -70px;
    left: -28px;
    z-index: -1;
    font-weight: bold;
    color: rgb(0, 0, 0);
  }
  &__caption {
    background-color: #000000b3;
    border-radius: 7px;
    color: #fff;
  }
}
</style>