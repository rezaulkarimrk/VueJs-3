<template>
  <div class="flex justify-end mb-10 me-3">
    {{ userData.name }} @{{ userData.username }} | Network Status:
    <span :style="{ color: online ? 'green' : 'red' }">
      {{ online ? "Online" : "Ofline" }}
    </span>
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
import { useOnline } from "@vueuse/core";
// import { RouterLink, RouterView } from "vue-router";

/*
user data
*/

const userData = reactive({
  name: "Reazul Karim RK",
  username: "rezaulkarimRK",
});

/*
  online status
*/

const online = useOnline();

provide("userDataByProvider", userData);
</script>
