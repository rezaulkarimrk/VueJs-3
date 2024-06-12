<template>
  <div class="home grid justify-center mt-10">
    <h2 ref="appTitleRef" class="text-3xl">{{ counterApp }}</h2>
    <h3 class="text-2xl justify-self-center">{{ counter.title }}</h3>
    <div class="flex justify-center">
      <button @click="counter.decreaseCounter(2)" class="btn px-3 text-3xl">--</button>
      <button @click="counter.decreaseCounter(1)" class="btn px-3 text-3xl">-</button>
      <span class="counter text-3xl">{{ counter.count }}</span>
      <button @click="counter.increaseCounter(1)" class="btn px-3 text-3xl">+</button>
      <button @click="counter.increaseCounter(2)" class="btn px-3 text-3xl">++</button>
    </div>
    <p class="justify-self-center mt-5">This counting is {{ counter.oddOrEven }}</p>
  </div>

  <div class="grid justify-center mt-2">
    <h4 class="text-center text-2xl">Edit counter title:</h4>
    <input
      v-model="counter.title"
      v-autofocus
      type="text"
      class="border-2 border-gray-600 rounded-sm"
    />
  </div>
</template>

<script setup>
/*
  imports
*/

import { vAutofocus } from "@/directives/vAutofocus";
import { useCounterStore } from "@/stores/counter";
import { ref, onMounted } from "vue";
/*
    app title
    */
const counterApp = "Amazing counter app";

const appTitleRef = ref(null);
onMounted(() => {
  console.log(`The app title is ${appTitleRef.value.offsetWidth} px`);
});

onMounted(() => {
  console.log("Do stuff related to app title");
});

/*
  counter
*/

const counter = useCounterStore();
</script>

<!--
<template>
  <div class="home grid justify-center mt-10">
    <h2 ref="appTitleRef" class="text-3xl">{{ counterApp }}</h2>
    <h3 class="text-2xl justify-self-center">{{ counterData.title }}</h3>
    <div class="flex justify-center">
      <button @click="decreaseCounter(2)" class="btn px-3 text-3xl">--</button>
      <button @click="decreaseCounter(1)" class="btn px-3 text-3xl">-</button>
      <span class="counter text-3xl">{{ counterData.count }}</span>
      <h1></h1>
      <button @click="increaseCounter(1, $event)" class="btn px-3 text-3xl">+</button>
      <button @click="increaseCounter(2)" class="btn px-3 text-3xl">++</button>
    </div>
    <p class="justify-self-center mt-5">This counting is {{ oddOrEven }}</p>
  </div>

  <div class="grid justify-center mt-2">
    <h4 class="text-center text-2xl">Edit counter title:</h4>
    <input
      v-autofocus
      v-model="counterData.title"
      type="text"
      class="border-2 border-gray-600 rounded-sm"
    />
  </div>
</template>

//composition api
<script setup>
/*
  imports
*/

import { vAutofocus } from "@/directives/vAutofocus";
import { ref, onMounted } from "vue";
import { useCounter } from "@/use/useCounter";

/*
    app title
    */
const counterApp = "Amazing counter app";

const appTitleRef = ref(null);
onMounted(() => {
  console.log(`The app title is ${appTitleRef.value.offsetWidth} px`);
});

onMounted(() => {
  console.log("Do stuff related to app title");
});

const { counterData, oddOrEven, increaseCounter, decreaseCounter } = useCounter();
</script>
-->
