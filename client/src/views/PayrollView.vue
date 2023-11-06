<template>
  <div>
    <h1>Payroll</h1>


    <div v-if="showModal">
      <Modal   @close="toggleModal">
         <template #sample>asd</template>
      </Modal>
    </div>
    <button @click="toggleModal">Open Modal</button>
  </div>
</template>

<script >

import Modal from  "../components/Modal.vue";

  export default {
    components: {Modal},
    data(){
      return{
        header: 'Header',
        showModal: false
      }
    },
    methods: {
      toggleModal(){
        this.showModal = !this.showModal
      }
    },
  }
</script>

<style  scoped>
</style>