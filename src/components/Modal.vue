<template>
  <teleport to=".modals-container">
    <div
      v-if="modalValue"
      class="modal bg-yellow-100 p-3 z-10 w-full h-full left-0 top-0 absolute"
    >
      <!-- <h1 class="text-2xl"><slot name="title" /></h1> -->
      <h1 class="text-2xl">{{ title }}</h1>
      <slot />
      <!-- <pre>{{ $slots.title() }}</pre> -->
      <button @click="emit('hideModal')" class="btnn">Hide Modals</button>
    </div>
  </teleport>
</template>

<script setup>
/*
  imports
*/
import { useSlots } from "vue";
const slots = useSlots();

/*
props
*/

const props = defineProps({
  modalValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "No Title specified",
  },
});
// console.log(props.title);

const emit = defineEmits(["hideModal"]);

// console.log(slots.title());
</script>

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
