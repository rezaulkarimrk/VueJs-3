<template>
  <div class="home">
    <h2 class="text-3xl" >{{ counterApp }}</h2>
    <h3 class="text-2xl" >{{counterData.title}}</h3>
    <div class="flex justify-center">
      <button @click="decreaseCounter(2)" class="btn px-3">--</button>
      <button @click="decreaseCounter(1)" class="btn px-3"> -</button>
      <span class="counter">{{counterData.count}}</span>
      <h1></h1>
      <button @click="increaseCounter(1, $event)" class="btn px-3"> +</button>
      <button @click="increaseCounter(2)" class="btn px-3"> ++</button>
    </div>
    <p>This counting is {{oddOrEven}}</p>
  </div>

  <div class="grid justify-center mt-2">
    <h4 class="text-center text-2xl">Edit counter title:</h4>
    <input v-autofocus v-model="counterData.title" type="text"class="border-2 border-gray-600 rounded-sm">
  </div>
</template>


//composition api
<script setup>
/*
  imports
*/ 
  import {ref, reactive, computed, watch, onMounted, onBeforeUnmount, onBeforeMount, onUnmounted, onBeforeUpdate, onUpdated} from 'vue';
  import {vAutofocus} from '@/directives/vAutofocus';
/*
  app title
*/ 
  const counterApp = 'Amazing counter app'

  onMounted(() => {
    console.log("Do stuff related to app title")
  })

// const counter = ref(0),
//   counterTitle = ref('My Counter:')

/*
  counter
*/ 
const counterData = reactive({
  count: 0,
  title: 'My Counter'
})

watch(()=> counterData.count, (newCount) => {
  if(newCount === 20) {
    alert("Way to go! You made it to 20!!")
  }
})
 
const oddOrEven = computed (() => {
  if(counterData.count === 0){
    return ""
  }
  else if(counterData.count % 2){
    return 'odd'
  }
  return 'even'
})

const increaseCounter = (amount, e) => {
  counterData.count += amount;
}

const decreaseCounter = (amount) => {
  counterData.count -= amount;
  if(counterData.count < 0){
    counterData.count = 0;
  }
}

onMounted(() => {
    console.log("Do stuff related to app title")
})

/*
  directives

  const vAutofocus = {
    mounted: (el) => {
      el.focus()
    }
  }
*/
/* 
onBeforeMount(() => {
  console.log('onBeforeMount')
})
onMounted(() => {
  console.log('onMounted')
})
onBeforeUnmount(() => {
  console.log('onBeforeUnMount')
})
onUnmounted(() => {
  console.log('onUnmounted');
})
onBeforeUpdate(() => {
  console.log('beforeUpdate')
})
onUpdated(() => {
  console.log('Updated')
})
*/
// const increaseCounter = () => {
//   counterData.value++;
// }
// const decreaseCounter = () => {
//   if(counter.value > 0){
//     counter.value--;
//   }
// }

</script>
<!--
<script>
export default {
    data() {
      return {
        count: 0
      }
  },
  computed:{
    myComputetdProperty(){
      // perform logic based on a data property
      return 'my result'
    }
  },
  watch:{
    count(newCount, oldCount){
      if(newCount == 20) alert('asdfasd')
    }
  },
  mounted(){
    console.log('mounted')
  },
  unmounted(){
    console.log('unmounted')
  },
  directives: {
    autofocus: {
      mounted(el){
        el.focus()
      }
    }
  }
}
</script>
-->


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