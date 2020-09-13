<template>
    <nav class="navbar bg-dark">
      <h1>
        <a href="/"> <i class="fas fa-code"></i> DevConnector </a>
      </h1>
      <ul>
        <li><router-link to="/profiles">Developers</router-link></li>
        <li><router-link to="/register">Register</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
      </ul>
    </nav>
</template>
<script>
    export default {
        name: 'navbar'
    }
</script>
<style scoped>
</style>

