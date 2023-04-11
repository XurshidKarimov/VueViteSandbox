export default {
    beforeMount(element, binding){
        window.addEventListener('scroll', () => binding.value());
    },

    beforeUnmount(element, binding){
        element.onscroll = null;
    }
}