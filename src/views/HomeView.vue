<template>
  <div class="home">
    <div class="flex justify-center">
      <button @click="decreaseCounter" class="btn bg-green-500 active:text-green-500"> -</button>
      <span class="counter">{{counter}}</span>
      <h1></h1>
      <button @click="increaseCounter" class="btn"> +</button>
    </div>
  </div>
</template>


//composition api
<script setup>
import {ref} from 'vue';

const counter = ref(0);

const increaseCounter = () => {
  counter.value++;
}
const decreaseCounter = () => {
  if(counter.value > 0){
    counter.value--;
  }
}


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