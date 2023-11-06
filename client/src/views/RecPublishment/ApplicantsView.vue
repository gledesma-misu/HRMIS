<template>
    <Sidebar />
    <Header />
    <div class="container">
        <h1>Recruitment Publishing</h1>
        <div class="card">

        </div>

    </div>
</template>
<script setup>

</script>
<script>
import Sidebar from '../../components/Sidebar.vue'
import Header from '../../components/Header/Header.vue'
// import ApplicantsView from './RecPublishment/ApplicantsView.vue';


export default {
    name: 'Applicants',
    components: {
        Sidebar,

        Header,

    },
};
</script>


<style lang="scss" scoped></style>