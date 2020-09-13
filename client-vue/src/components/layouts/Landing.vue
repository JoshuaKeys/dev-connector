<template>
  <section class="landing">
    <div class="dark-overlay">
      <div class="landing-inner">
        <h1 class="x-large">Developer Connector</h1>
        <div class="lead">
          Create Developer profile/portfolio, share posts
          and get help from other developers.
          <div class="buttons">
            <router-link to="/register" class="btn btn-primary">Sign Up</router-link>
            <router-link to="/login" class="btn">Login</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Landing",
};
</script>
<style scoped>
</style>