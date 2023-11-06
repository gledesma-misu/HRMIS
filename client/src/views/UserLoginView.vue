<template>
  <div class="login-container">
    <h2>CWC-HRMIS</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div class="form-actions">
        <button type="submit" class="login-button">Login</button>
        <button type="button" class="register-button" @click="goToRegistration">Register</button>
      </div>
    </form>
    <div v-if="isLoggedIn" class="alert alert-success mt-3" role="alert">
      Logged in successfully!
    </div>
    <div v-if="error" class="alert alert-danger mt-3" role="alert">
      Invalid username or password. Please try again.
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      isLoggedIn: false,
      error: false,
    };
  },
  methods: {
    login() {
      if (this.username === 'admin' && this.password === 'admin') {
        this.isLoggedIn = true;
        this.error = false;
        localStorage.setItem('isLoggedIn', 'true'); 
        this.$router.push({ name: 'dashboard' });
      } else {
        this.isLoggedIn = false;
        this.error = true;
      }
    },
    goToRegistration(){
      console.log('Registration');
    }
  }
  
};
</script>
  
<style scoped>
.login-container {
  position: relative;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.form-actions {
  text-align: center;
}

.login-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  cursor: pointer;
  margin-right: 10px;
}

.register-button {
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  cursor: pointer;
}

.error {
  color: red;
  text-align: center;
  margin-top: 10px;
}
</style>
  