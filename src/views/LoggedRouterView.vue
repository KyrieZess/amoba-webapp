<template>
  <div>
    <div id="nav">
      <router-link to="/">{{ $t("Menu.Home") }}</router-link> |
      <a href="" @click="logout">{{ $t("Menu.Logout") }}</a>
    </div>
    <router-view name="loggedView" />
  </div>
</template>
<script>
import { AuthLogic } from "../logic/auth";
export default {
  methods: {
    logout() {
      AuthLogic.Logout();
      this.$router.push("/login");
    },
  },
};
</script>