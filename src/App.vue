<template>
  <main>
    <div class="container">
      <div class="dragNdrop-content">
        <userDirective/>
      </div>
    </div>
  </main>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import DragNDrop from './components/DragNDrop.vue';
import userDirective from './components/userDirective.vue';


</script>


<style scoped>
  main{
    width: 100%;
  }
  .container{
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }
</style>
