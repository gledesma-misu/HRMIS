<template>
  <!-- <Sidebar /> -->
  <Header />
  <div class="container">
    <h1>Recruitment Publishing</h1>
    <div class="card">
      <RecPublishingView />
    </div>

  </div>
</template>

<script >
import Sidebar from '../components/Sidebar.vue'
import Header from '../components/Header/Header.vue'

import RecPublishingView from './RecPublishment/RecPublishingView.vue';

export default {
  name: 'Recruitment Publishment',
  components: {
    Sidebar,
    Header,
    RecPublishingView
  },

};
</script>

<style  scoped>
.container {
  padding-top: .05%;
}

.card {
  background: var(--surface-card);
  padding: 2%;
  border-radius: 10px;
  margin-bottom: 1rem;
}
</style>