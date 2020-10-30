<template>
  <div class="navbar">
    <nav>
      <ul>
        <li>
          {{ this.$router.fullPath }}
          <button data-hover="Go Home" @click="gohome">
            <div class="main-header__link">Home</div>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    gohome() {
      if (this.$route.path != "/") {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped lang="less">
.main-header__link {
  text-decoration: none;
  color: inherit;
}
.navbar {
  margin: 3rem 0;
  a {
    text-decoration: none;
  }
}
a:hover {
  border-bottom: 1px solid #111;
}
button:hover {
  cursor: pointer;
}
button {
  background: transparent;
  outline: none;
  position: relative;
  border: 2px solid #111;
  padding: 15px 50px;
  overflow: hidden;
}
button:hover:before {
  opacity: 1;
  transform: translate(0, 0);
}
button:before {
  content: attr(data-hover);
  position: absolute;

  left: 0;
  height: 100%;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 800;
  font-size: 0.8em;
  opacity: 0;
  transform: translate(-100%, 0);
  transition: all 0.3s ease-in-out;
}
button:hover div {
  opacity: 0;
  transform: translate(100%, 0);
}
button div {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 800;
  font-size: 0.8em;
  transition: all 0.3s ease-in-out;
}
</style>