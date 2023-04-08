<template>
   <div class="drop-zone">
        <div v-for="item in getList(1)" :key="item.id" class="drag-el" draggable="true">
            {{ item.todo }}
        </div>
   </div>
   <div class="drop-zone">
        <div v-for="item in getList(2)" :key="item.id" class="drag-el" draggable="true">
            {{ item.todo }}
        </div>
   </div>
</template>

<script>
import {ref} from 'vue'

export default{
    setup(){
        let items = ref([
            {id: 0, todo: 'Do lesson', list: 1}, 
            {id: 1, todo: 'Learn dragNdrop', list: 1},
            {id: 2, todo: 'Do something', list: 2}
        ]);

        const getList = (list) => {
            return items.value.filter(object => object.list === list);
        }

        return {
            getList,
        }
    }
}

</script>


<style>
  .drop-zone{
    min-width: 50%;
    margin: 50px auto;
    background-color: gray;
    padding: 10px;
    min-height: 10px;
  }

  .drag-el{
    background-color: dodgerblue;
    color: white;
    padding: 5px;
    cursor: pointer;
    border-radius: 5px;
  }
  .drag-el:not(:last-child){
    margin-bottom: 5px;
  }
</style>