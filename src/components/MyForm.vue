<template>
    <p>{{ inputVal }}</p>
    <form action="" @submit.prevent="">
        <div>
            <input type="text" v-model="inputVal">
        </div>
        <div>
            <button>Click</button>
        </div>
        
    </form>
</template>

<script>
import {ref} from 'vue'

export default{
    setup(){
        let inputVal = ref('');


        return {
            inputVal,
        }
    }
}

</script>


<style>
    div:has(input[type="text"]){
        margin: 35px;
    }
</style>