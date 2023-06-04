<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { AuthLogic } from "./logic/auth";

export default {
  name: "App",
  mounted() {
    if (!AuthLogic.TokenIsValid() && this.$route.name != "Login") {
      this.$router.replace("Login");
    }
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
