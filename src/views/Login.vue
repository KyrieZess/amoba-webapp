<template>
  <div class="login-page-container">
    <b-container>
      <b-row>
        <b-col cols="12">
          <eh-input label="Felhasználónév" v-model="username" />
        </b-col>
        <b-col cols="12">
          <eh-input label="Jelszó" type="password" v-model="password" />
        </b-col>
        <b-col cols="12">
          <eh-input
            label="Token érvényesség"
            v-model="tokenValidTo"
            type="datetime-local"
          />
        </b-col>
        <b-col cols="12">
          <b-button class="login-button" @click="login">
            Bejelentkezés
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { AuthLogic } from "../logic/auth";
import moment from "moment";

export default {
  name: "Login",
  data() {
    return {
      username: "atuny0",
      password: "9uQFF1Lh",
      tokenValidTo: moment().add(5, "minutes").format("YYYY-MM-DDTHH:mm"),
    };
  },
  methods: {
    async login() {
      const isSuccess = await AuthLogic.Login(
        this.username,
        this.password,
        this.tokenValidTo
      );
      if (isSuccess) {
        this.$router.push("/");
      } else {
        this.$bvToast.toast("Rossz felhasználónév/jelszó lett megadva", {
          title: "Sikertelen bejelentkezés",
          variant: "danger",
          solid: true,
        });
      }
    },
  },
  mounted() {
    if (AuthLogic.TokenIsValid()) {
      this.$router.replace("/");
    }
  },
};
</script>