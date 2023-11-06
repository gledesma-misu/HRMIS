<template>

  <div id="content-wrapper" class="d-flex flex-column">
    <div class="content">
      <Header>
        <div class="container">
        </div>
      </Header>
    </div>
  </div>
</template>

<script >
import { RouterLink, RouterView } from "vue-router";

import Sidebar from "../components/Sidebar.vue";
import Header from "../components/Header/Header.vue";


export default {
  name: "SelfService",
};
</script>

<style lang="scss" scoped></style>