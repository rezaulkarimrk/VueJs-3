import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
    title: 'My Counter Title'
  }),
  actions: {
    increaseCounter(amount){
      this.count += amount;
    },
    decreaseCounter(amount){
      this.count -=amount;

      if(this.count < 0) this.count = 0;
    },
  },
  getters:{
    oddOrEven:(state) => {
      if(state.count % 2) return 'odd';
      return 'even'
    }
  }





  // getters: {
  //   doubleCount: (state) => state.counter * 2
  // },
  // actions: {
  //   increment(){
  //     this.counter++
  //   }
  // }
})



















// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })
