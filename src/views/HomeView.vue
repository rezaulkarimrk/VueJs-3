<template>
  <div class="home">
    <h3 class="text-2xl" >{{counterData.title}}</h3>
    <div class="flex justify-center">
      <button @click="decreaseCounter" class="btn px-3"> -</button>
      <span class="counter">{{counterData.count}}</span>
      <h1></h1>
      <button @click="increaseCounter" class="btn px-3"> +</button>
    </div>
  </div>

  <div class="grid justify-center mt-2">
    <h4 class="text-center text-2xl">Edit counter title:</h4>
    <input v-model="counterData.title" type="text"class="border-2 border-gray-600 rounded-sm">
  </div>
</template>


//composition api
<script setup>
import {ref, reactive} from 'vue';

const counter = ref(0),
  counterTitle = ref('My Counter:')

const counterData = reactive({
  count: 0,
  title: 'My Counter'
})

const increaseCounter = () => {
  counterData.count++;
}

const decreaseCounter = () => {
  if(counterData.count>0){
    counterData.count--;
  }
}

// const increaseCounter = () => {
//   counterData.value++;
// }
// const decreaseCounter = () => {
//   if(counter.value > 0){
//     counter.value--;
//   }
// }


</script>

//composition api
<!--
<script>
  import {ref} from 'vue'

  export default {
    setup() {
      const counter = ref(10)

      const increaseCounter = () => {
        counter.value++;
      }
      const decreaseCounter = () =>{
        if(counter.value > 0) counter.value--;
      }

      return{
        counter,
        increaseCounter,
        decreaseCounter
      }
    }
  }
</script>
-->

<!--
//option api
<script>
  export default {
    data(){
      return {
        counter: 0
      }
    },
    methods: {
      increaseCounter(){
        this.counter++;
      },
      decreaseCounter(){
        if(this.counter > 0){
          this.counter--;
        }
      }
    },
  }
</script>
-->
<style>
.home {
  text-align: center;
  padding: 20px;
}
.btn, .counter{
  font-size: 40px;
  margin: 10px;
}

</style>