<template>
  <div class="navbar">
    <nav>
      <ul>
        <li>
          <button data-hover="Go Home">
            <div>
              <router-link class="main-header__link" to="/allpokemons"
                >Home</router-link
              >
            </div>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
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
h1 {
  font-size: 2em;
  padding: 20px 0;
}
p {
  font-size: 0.75em;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 20px 0;
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

/*button:before (attr data-hover)*/
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