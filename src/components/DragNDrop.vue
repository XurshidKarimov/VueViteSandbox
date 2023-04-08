<template>
    <div class="drop-zone" @drop="onDrop($event, 1)" @dragenter.prevent @dragover.prevent>
         <div v-for="item in getList(1)" :key="item.id" class="drag-el" draggable="true"
         @dragstart="startDrag($event, item)">
             {{ item.todo }}
         </div>
    </div>
    <div class="drop-zone" @drop="onDrop($event, 2)" @dragenter.prevent @dragover.prevent>
         <div v-for="item in getList(2)" :key="item.id" class="drag-el" draggable="true"
         @dragstart="startDrag($event, item)">
             {{ item.todo }}
         </div>
    </div>
 </template>
 
 <script >
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
 
         const startDrag = (event, item) => {
             event.dataTransfer.dropEffect = "move";
             event.dataTransfer.effectAllowed = "move";
             event.dataTransfer.setData("itemID", item.id)
         }
 
         const onDrop = (event, list) => {
             const itemID = event.dataTransfer.getData("itemID");
             const item = items.value.find(item => item.id == itemID);
             item.list = list;
         }
 
         return {
             getList,
             startDrag,
             onDrop
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