<template>
  <div class="container">
    <h1 class="large text-primary">Sign Up</h1>
    <p class="lead"><i class="fas fa-user"></i> Create Your Account</p>
    <form action="dashboard.html" class="form">
      <div class="form-group">
        <input type="text" placeholder="Name" />
      </div>
      <div class="form-group">
        <input type="email" required placeholder="Email Address" />
        <small class="form-text">
          This site uses Gravatar, so if you want a profile image, use a
          Gravatar email
        </small>
      </div>
      <div class="form-group">
        <input minlength="6" type="password" placeholder="Password" />
      </div>
      <div class="form-group">
        <input minlength="6" type="password" placeholder="Confirm Password" />
      </div>
      <input type="submit" value="Register" class="btn btn-primary" />
    </form>
    <p class="m-1">
      Already have an account?
      <router-link to="/login">Sign in</router-link> {{ route }}
    </p>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: 'Register',
  // computed: {
  //   route() {
  //     console.log(this.$router);
  //     return 1;
  //   },
  // },
  computed: mapState({
    routeipc: (state) => state.count,
  }),
  beforeRouteEnter(to, from, next) {
    console.log('helloooooo');
    next();
  },
  beforeRouteLeave(to, from, next) {
    // alert('Hellooooo');
    next();
  },
};
</script>
<style scoped></style>
