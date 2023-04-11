<template>
    <slot></slot>
    
    <h1 class="red">
        <slot name="heading"></slot>
    </h1>
    <p>
        <slot name="body"></slot>
    </p>
    <button>
        <slot name="button" :mail="name"></slot>
    </button>
</template>

<script>
    export default{
        setup(){
            const name = "Alesha";

            return {
                name
            }
        }
    }
</script>

<style>

</style>