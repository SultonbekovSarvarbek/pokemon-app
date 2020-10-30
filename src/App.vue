<template>
  <div id="app">
    <navbar />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>


<script>
import navbar from "./components/header";
export default {
  components: {
    navbar,
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap");
@import url("https://pro.fontawesome.com/releases/v5.12.0/css/all.css");
</style>
<style lang="less">
html {
  box-sizing: border-box;
}
body {
  background-color: #c7ccde;
}
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10px 0 10px;
}

#app {
  font-family: "Montserrat", sans-serif;
  margin: 2rem 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
// btn style
.btn {
  letter-spacing: 0.1em;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 45px;
  max-width: 160px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
  &:hover {
    text-decoration: none;
  }
}

.backeffect {
  --uismLinkDisplay: var(--smLinkDisplay, inline-flex);
  display: var(--uismLinkDisplay);
  color: #000;
  outline: solid 2px #000;
  position: relative;
  transition-duration: 0.4s;
  overflow: hidden;
}
.backeffect::before,
.backeffect span {
  margin: 0 auto;
  transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  transition-duration: 0.4s;
}

.backeffect:hover {
  background-color: #000;
}

.backeffect:hover span {
  -webkit-transform: translateY(-400%) scale(-0.1, 20);
  transform: translateY(-400%) scale(-0.1, 20);
}

.backeffect::before {
  content: attr(data-sm-link-text);
  color: #fff;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  -webkit-transform: translateY(500%) scale(-0.1, 20);
  transform: translateY(500%) scale(-0.1, 20);
}
.backeffect:hover::before {
  letter-spacing: 0.05em;
  -webkit-transform: translateY(0) scale(1, 1);
  transform: translateY(0) scale(1, 1);
}
// card style
@color0: #3a1c71;
@color1: #000000;

.card {
  margin-top: 2.5rem;
  background: #dddddd;
  border-radius: 15px;
  box-shadow: 0px 5px 20px -10px #111111;
  display: inline-block;
  padding: 1em;
  position: relative;
  text-align: left;
  transition: 0.4s;
  width: 400px;
  &:nth-child(1) {
    transform: translateY(0px) rotate(-1deg);
  }
  &:nth-child(2) {
    transform: translateY(0px) rotate(-5deg);
  }
  &:nth-child(3) {
    transform: translateY(0px) rotate(-2deg);
  }
  &:nth-child(4) {
    transform: translateY(0px) rotate(-1deg);
  }
  &:nth-child(5) {
    transform: translateY(0px) rotate(-2deg);
  }
  &:nth-child(6) {
    transform: translateY(0px) rotate(-3deg);
  }
  &:nth-child(7) {
    transform: translateY(0px) rotate(0deg);
  }
  &:nth-child(8) {
    transform: translateY(0px) rotate(3deg);
  }
  &:nth-child(9) {
    transform: translateY(0px) rotate(-4deg);
  }
  &:hover {
    box-shadow: 0px 13px 30px -15px @color1;
    transform: translateY(-10px);
    z-index: 5;
  }
  &__caption {
    background-color: rgba(255, 255, 255, 0.65);
    border-radius: 0 0 3px 3px;
    padding: 1em;
    position: relative;
  }
  &__image-container {
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 3px 3px 0 0;
    padding: 1em 1em 0;
    text-align: center;
  }
  &__type {
    background: #bbbbbb;
    border-radius: 2px;
    color: #ffffff;
    letter-spacing: 0.1em;
    line-height: 1;
    padding: 0.25em;
    position: absolute;
    right: 1em;
    text-transform: uppercase;
    top: 0;
    transform: translateY(-50%);
  }
  &__label {
    display: block;
    font-size: 10px;

    margin-bottom: 3px;
    text-transform: uppercase;
  }
  &__link {
    font-size: 1.5em;
    font-weight: 700;
    letter-spacing: 0.02em;
    text-align: center;
    margin: 1.5rem 0;
  }
  &__name {
    font-size: 1.5em;
    font-weight: 700;
    letter-spacing: 0.02em;
    text-align: center;
  }
  &__abilities {
    display: flex;
    justify-content: space-between;
  }
  &__ability {
    flex: 1 0;
    margin-top: 1em;
  }
  &--normal {
    background: linear-gradient(110deg, #fdbb2d 0%, @color0 100%);
    box-shadow: 0px 5px 20px -10px @color0;
    &__type {
      background-color: #c08a53;
    }
  }
  &__button {
    margin-top: 1rem;
    cursor: pointer;
    border: 0;
    display: block;
    width: 100%;
    padding: 0.8rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.2rem;
    background-color: rgb(65, 42, 85);
    border-radius: 7px;
  }
}
</style>
