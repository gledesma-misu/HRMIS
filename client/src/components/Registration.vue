<template>
  <div class="container">
    <h1 class="mt-4">Registration Page</h1>
    <form @submit.prevent="register" class="mt-4">
      <div class="mb-3">
        <label for="reg-username" class="form-label">Username:</label>
        <input
          type="text"
          id="reg-username"
          v-model="username"
          class="form-control"
          required
        />
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Email:</label>
        <input
          type="email"
          id="email"
          v-model="email"
          class="form-control"
          required
        />
      </div>

      <div class="mb-3">
        <label for="reg-password" class="form-label">Password:</label>
        <input
          type="password"
          id="reg-password"
          v-model="password"
          class="form-control"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary" @click="register">
        Register
      </button>
    </form>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {
      username: "",
      password: "",
      email: "",
    };
  },
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password,
      });
      console.log(response.data);
    },
  },
};
</script>

<style lang="scss" scoped></style>