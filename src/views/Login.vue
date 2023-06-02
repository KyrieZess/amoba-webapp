<template>
  <b-container style="max-width: 500px; border: solid">
    <b-row>
      <b-col cols="12">
        <eh-input label="Felhasználónév" v-model="username" />
      </b-col>
      <b-col cols="12">
        <eh-input label="Jelszó" type="password" v-model="password" />
      </b-col>
      <b-col cols="12">
        <b-button style="margin: 20px auto" @click="login"> Bejelentkezés </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { AuthLogic } from "../logic/auth";

export default {
  name: "Login",
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    async login() {
      const isSuccess = await AuthLogic.Login(this.username, this.password);
      if (isSuccess) {
        this.$bvToast.toast("Sikeresen bejelentkezett", {
          title: "Sikeres bejelentkezés",
          variant: "success",
          solid: true,
        });
        this.$router.push("/");
      } else {
        this.$bvToast.toast("Rossz felhasználónév/jelszó lett megadva", {
          title: "Sikertelen bejelentkezés",
          variant: "success",
          solid: true,
        });
      }
    },
  },
};
</script>