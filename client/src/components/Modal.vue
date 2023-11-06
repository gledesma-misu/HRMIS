<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modalx">
            <slot name="sample"></slot>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    props: ['header', 'text', 'theme'],
    methods:{
        closeModal(){
            this.$emit('close')
        }
    }
}
</script>

<style  scoped>
.modalx{
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}
.backdrop{
    top: 0;
    position: fixed; 
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
}
.modalx h1{
    color: aqua;
    border: none;
    padding: 0;
}
</style>