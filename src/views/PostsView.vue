<template>
  <div class="ms-5 mt-5">
    <h1 class="font-mediam text-5xl">Posts</h1>
    <textarea
      v-autofocus
      class="resize-none border-2 border-gray-600 h-40 w-80"
    ></textarea>
  </div>
  <div class="mt-5 ms-5">
    <ul class="grid grid-flow-col justify-start gap-5 text-white">
      <li v-for="post of posts" :key="post.id" class="bg-[#6B21A8] rounded-md py-2 px-5">
        <RouterLink :to="`/postDetails/${post.id}`">{{ post.title }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
/*
  imports
*/
import { ref } from "vue";
// import {vAutofocus} from "@/directives/vAutofocus"
import { vAutofocus } from "@/directives/vAutofocus";

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
</script>
