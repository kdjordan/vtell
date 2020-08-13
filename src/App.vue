<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <Tariffs />
    <Sim />
    <Countries />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Countries from './components/Countries'
import Sim from './components/Sim'
import Tariffs from './components/Tariffs'

export default {
  components: {
    Tariffs,
    Sim,
    Countries,
    Footer
  }
}
</script>

<style lang="scss">
@import './scss/_variables.scss';
@import './scss/_base.scss';

@font-face {
    font-family: "Pf_Beau";
    src: local("PF_Beau"),
     url(./fonts/PFBeauSansPro-Regular.ttf) format("truetype");
  }

  .btn__primary {
    background: $red;
    color: $white;
    font-size: 20px;
    font-weight: 300;
    border: none;
    border-radius: 35px;
    padding: 15px 0;
    width: 250px;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: $red;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
