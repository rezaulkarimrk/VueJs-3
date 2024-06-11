<template>
  <div class="flex justify-end mb-10 me-3">
    {{ userData.name }} @{{ userData.username }}
  </div>
  <nav class="ps-5 flex space-x-5 justify-center">
    <RouterLink class="active:text-green-400" to="/">Home</RouterLink>
    <RouterLink to="/posts">Posts</RouterLink>
    <RouterLink to="/modals">Modals</RouterLink>
  </nav>

  <RouterView :userData="userData" />
</template>

<script setup>
/*
  imports
*/
import { reactive, provide } from "vue";
// import { RouterLink, RouterView } from "vue-router";

/*
user data
*/

const userData = reactive({
  name: "Reazul Karim RK",
  username: "rezaulkarimRK",
});

provide("userDataByProvider", userData);
</script>
