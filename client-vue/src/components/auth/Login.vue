<template>
  <div class="container">
    <div class="alert alert-danger">Invalid Credentials</div>
    <h1 class="large text-primary">Sign In</h1>
    <p class="lead">
      <i class="fas fa-user"></i> Sign into your account
    </p>
    <form action="dashboard.html" class="form">
      <div class="form-group">
        <input type="email" required placeholder="Email Address" />
      </div>
      <div class="form-group">
        <input minlength="6" type="password" placeholder="Password" />
      </div>
      <input type="submit" value="Login" class="btn btn-primary" />
    </form>
    <p class="m-1">
      Don't have an account?
      <router-link to="/register">Sign Up</router-link>
    </p>
  </div>
</template>
<script>
export default {
  name: "Login",
};
</script>
<style scoped>
</style>