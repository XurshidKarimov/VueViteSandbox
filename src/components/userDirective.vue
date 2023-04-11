<template>
    <div>
      <Slots>
        <p>Count: {{ count }} </p>
        <input type="text" v-model="user.address.name">
        <button @click="increment">Click</button>
      <template #heading>This is heading</template>
      <template #body>This is body</template>
      <template #button="emailFrom">{{ emailFrom.mail }}</template>
      <!-- использование компонента Slots -->
      </Slots>

    </div>
</template>
  
  <script>
  import { ref, watch } from 'vue'
  import Slots from './Slots.vue'
  
  export default {
    components: {
      Slots // регистрация компонента Slots в текущем компоненте
    },
    setup() {
      const count = ref(0)
      const user = ref({
        name: 'Xurshid',
        address: {
          name: 'Zarbxona',
          number: 28,
        }
      })
  
      watch(user.value, (newValue) => {
        console.log(newValue.address.name)
      })
  
      function increment() {
        count.value += 1
      }
  
      return {
        count,
        increment,
        user,
      }
    },
  }
  </script>
  
  <style>
  
  </style>