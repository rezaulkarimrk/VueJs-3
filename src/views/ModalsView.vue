<template>
  <div class="modals mt-5 ms-5">
    <h1 class="text-2xl">Modals</h1>
    <div>
      <label
        >Show Dark modals
        <input v-model="showDarkModals" type="checkbox" />
      </label>
    </div>
    <!-- <pre>{{ showDarkModals }}</pre> -->
    <button @click="showModal = true" class="btnn">Show modal</button>
    <!-- <button @click="myTest" class="btnn">test</button> -->
    <component
      :is="showDarkModals ? ModalDark : Modal"
      v-model="showModal"
      :userData="userData"
      title="My Modal title(via prop)"
    >
      <!-- <Modal
      v-if="showModal"
      title="My Modal title(via prop)"
      @hideModal="showModal = false"
    > -->
      <!-- <template v-slot:title>My New Title</template> -->
      <!-- <template #title>My New Title</template> -->
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type specimen
        book. It has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>
    </component>
  </div>
</template>

<script setup>
/*
    imports
*/
import { ref } from "vue";
import Modal from "@/components/Modal.vue";
import ModalDark from "@/components/ModalDark.vue";

const showDarkModals = ref(false);
const showModal = ref(false);

/*
  props
*/

const props = defineProps({
  userData: {
    type: Object,
  },
});

// const testing = ref(false);
// const myTest = () => {
//   console.log(testing);
//   if (testing.value) {
//     testing.value = false;
//   } else {
//     testing.value = true;
//   }
// };

// const myTest = () => {
//   console.log(testing);
//   if (!testing.value) {
//     testing.value = true;
//   } else {
//     testing.value = false;
//   }
// };

// const modalHandler = async () => {
//   console.log(showModal.value);
//   if (showModal) {
//     showModal = false;
//   } else {
//     showModal.value = true;
//   }
// };
</script>

<!--
<script>
import Modal from "@/components/Modal.vue";

export default {
  components: {
    Modal,
  },
};
</script>
-->
