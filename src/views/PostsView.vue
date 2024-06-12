<template>
  <div class="ms-5">
    <div class="mt-5">
      <h1 class="font-mediam text-5xl mb-5">Posts</h1>
      <ul class="grid grid-flow-col justify-start gap-5 text-white">
        <li
          v-for="post of posts"
          :key="post.id"
          class="bg-[#6B21A8] rounded-md py-2 px-5"
        >
          <RouterLink :to="`/postDetails/${post.id}`">{{ post.title }}</RouterLink>
        </li>
      </ul>
    </div>
    <div class="mt-5">
      <textarea
        v-autofocus
        class="resize-none border-2 border-gray-600 h-40 w-80"
      ></textarea>
    </div>
    <button
      @click="counter.increaseCounter(1)"
      class="rounded-md py-2 px-5 border-2 border-gray-600"
      :class="{ 'bg-yellow-400 text-pink-400': counter.oddOrEven === 'odd' }"
    >
      {{ counter.count }}
    </button>
  </div>
</template>

<script setup>
/*
  imports
*/
import { ref } from "vue";
// import { useCounter } from "@/use/useCounter";
import { vAutofocus } from "@/directives/vAutofocus";
import { useCounterStore } from "@/stores/counter";

const posts = ref([
  {
    id: "id1",
    title: "Post 1",
  },
  {
    id: "id2",
    title: "Post 2",
  },
  {
    id: "id3",
    title: "Post 3",
  },
  {
    id: "id4",
    title: "Post 4",
  },
  {
    id: "id5",
    title: "Post 5",
  },
]);

/*
Counter
*/

// const { oddOrEven, counterData, increaseCounter } = useCounter();
const counter = useCounterStore();
</script>
