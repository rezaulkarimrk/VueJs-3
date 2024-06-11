<template>
  <teleport to=".modals-container">
    <div
      v-if="modelValue"
      class="modal bg-yellow-100 p-3 z-10 w-full h-full left-0 top-0 absolute"
    >
      <!-- <h1 class="text-2xl"><slot name="title" /></h1> -->
      <h1 class="text-2xl">{{ title }}</h1>
      <slot />
      <!-- <pre>{{ $slots.title() }}</pre> -->
      <!-- <button @click="handleButtonClick" class="btnn">Hide Modals</button> -->
      <button @click="$emit('update:modelValue', false)" class="btnn">Hide Modals</button>
      <div>Username is: {{ userData.username }}</div>
      <div>Username Using Provide {{ uuserData.username }}</div>
    </div>
  </teleport>
</template>

<script setup>
/*
  imports
*/
import { useSlots, inject } from "vue";
const slots = useSlots();

/*
props
*/

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "No Title specified",
  },
  userData: {
    type: Object,
  },
});
// console.log(props.title);

// const emit = defineEmits(["hideModal"]);
const emit = defineEmits(["update:modelValue", "hideModal"]);

/*
  userdata by inject
*/

const uuserData = inject("userDataByProvider");

// handleButtonClick
/* 
const handleButtonClick = () => {
  emit("update:modelValue", false);
  // emit("hideModal", false);
};
*/
// console.log(slots.title());
</script>

<!-- Option API -->
<!-- 
<script>
export default {
  emits:['hideModal']
  props: {
    title: {
      type: String,
      default: "No title specified",
    },
  },
};
</script>
-->
