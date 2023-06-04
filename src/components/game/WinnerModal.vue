<template>
  <b-modal
    v-if="Visible && PlayersCount > 0"
    v-model="Visible"
    hide-footer
    hide-header
    no-close-on-backdrop
  >
    <div style="text-align: center">
      <div
        v-if="PlayersCount == 2 || SkippedPlayersCount == 1"
        style="padding: 10px"
      >
        <h1>
          Győzött a {{ TurnPlayerIndex + 1 }}. játékos (
          {{ WinnerPlayerMark }} )
        </h1>
      </div>
      <div v-else-if="SkippedPlayersCount > 0">
        <div
          v-for="(playerIndex, index) in SkippedPlayers"
          :key="'player' + playerIndex"
        >
          <h2 v-if="SkippedPlayersCount == index + 1">
            {{ index + 1 }}. helyezett: {{ playerIndex + 1 }}. játékos (
            {{ Players[playerIndex] }} )
          </h2>
          <h3 v-else>
            {{ index + 1 }}. helyezett: {{ playerIndex + 1 }}. játékos (
            {{ Players[playerIndex] }} )
          </h3>
        </div>
      </div>
    </div>
    <b-container>
      <b-row>
        <b-col>
          <b-button @click="newGame">Játék újra kezdése</b-button>
        </b-col>
        <b-col>
          <div
            v-if="
              PlayersCount > 2 &&
              SkippedPlayersCount != 0 &&
              PlayersCount - 1 != SkippedPlayersCount
            "
            style="text-align: end"
          >
            <b-button @click="gameContinuous">Játék folytatása</b-button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-modal>
</template>
<script>
export default {
  name: "WinnerModal",
  props: {
    Players: Array,
    SkippedPlayers: Array,
    WinnerPlayerMark: String,
    Visible: Boolean,
    TurnPlayerIndex: Number,
  },
  computed: {
    PlayersCount() {
      if (this.Players == null) {
        return 0;
      }
      return this.Players.length;
    },
    SkippedPlayersCount() {
      if (this.SkippedPlayers == null) {
        return 0;
      }
      return this.SkippedPlayers.length;
    },
  },
  methods: {
    gameContinuous() {
      this.$emit("GameContinuous");
    },
    newGame() {
      this.$emit("NewGame");
    },
  },
};
</script>