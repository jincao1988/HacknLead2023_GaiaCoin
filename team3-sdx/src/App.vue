<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { Bar } from 'vue-chartjs'
import BarChart from "./components/BarChart.vue";
import Modal from './components/Modal.vue';



</script>

<template>
  <header>
    <router-link to="/dashboard">Dashboard</router-link>
    some text
  </header>

  some text


  <button @click="navigateToDashboard" class="button-9">Go to Dashboard</button>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}


   /* CSS */
 .button-9 {
   appearance: button;
   backface-visibility: hidden;
   background-color: #1c6aaf;
   border-radius: 6px;
   border-width: 0;
   box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
   box-sizing: border-box;
   color: #fff;
   cursor: pointer;
   font-family: -apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif;
   font-size: 100%;
   height: 50px;
   line-height: 1.15;
   margin: 12px 0 0;
   outline: none;
   overflow: hidden;
   padding: 0 25px;
   position: relative;
   text-align: center;
   text-transform: none;
   transform: translateZ(0);
   transition: all .2s,box-shadow .08s ease-in;
   user-select: none;
   -webkit-user-select: none;
   touch-action: manipulation;
   width: 100%;
 }

.button-9:disabled {
  cursor: default;
}

.button-9:focus {
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;
}
</style>
