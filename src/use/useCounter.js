import {
  reactive,
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
  onBeforeMount,
  onUnmounted,
  onBeforeUpdate,
  onUpdated,
  nextTick,
} from "vue";


export function useCounter () {
    
    

    // const counter = ref(0),
    //   counterTitle = ref('My Counter:')

    /*
    counter
    */
    const counterData = reactive({
    count: 0,
    title: "My Counter",
    });

    watch(
    () => counterData.count,
    (newCount) => {
        if (newCount === 20) {
        alert("Way to go! You made it to 20!!");
        }
    }
    );

    const oddOrEven = computed(() => {
    if (counterData.count === 0) {
        return "";
    } else if (counterData.count % 2) {
        return "odd";
    }
    return "even";
    });

    const increaseCounter = async (amount, e) => {
    counterData.count += amount;

    nextTick;
    await nextTick();
    console.log("do something when counter has upadated in the dom");
    };

    const decreaseCounter = (amount) => {
    counterData.count -= amount;
    if (counterData.count < 0) {
        counterData.count = 0;
    }
    };

    onMounted(() => {
    console.log("Do stuff related to app title");
    });
    
    return {
        counterData,
        oddOrEven,
        increaseCounter,
        decreaseCounter,

    }
}



















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

/*
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
*/

//composition api
/*
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
*/

/*
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
}
*/