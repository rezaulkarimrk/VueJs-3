<template>
  <div class="ms-5 mt-5">
    <h1 class="font-mediam text-5xl">This is post page</h1>
    <p class="mt-5">display the content of post with ID of {{ $route.params.id }}</p>

    <div class="text-[#107d50] font-medium mt-10">
      <button
        @click="showPostID"
        class="p-[5px] border-2 border-gray-800 bg-gray-300 rounded"
      >
        Show Post ID
      </button>
    </div>
    <div class="text-[#107d50] font-medium mt-1">
      <button
        @click="goHome3Second"
        class="p-[5px] border-2 border-gray-800 bg-gray-300 rounded"
      >
        Go Home in 3 Second
      </button>
    </div>
    <div class="text-[#107d50] font-medium mt-1">
      <button
        @click="goToFirstPost"
        class="p-[5px] border-2 border-gray-800 bg-gray-300 rounded"
      >
        Go to first page
      </button>
    </div>
    <p class="text-[#107d50] font-medium">
      <RouterLink to="/posts"> &lt; Back</RouterLink>
    </p>
  </div>
</template>

<script setup>
/*
  imports
*/
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const showPostID = () => {
  // console.log(route.params.id);
  alert(`The ID of this post is: ${route.params.id}`);
};

const goHome3Second = () => {
  setTimeout(() => {
    // router.push("/");
    router.push({ name: "home" });
  }, 3000);
};

const goToFirstPost = () => {
  router.push({
    name: "postDetails",
    params: {
      id: "id1",
    },
  });
};
</script>
