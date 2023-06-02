<template>
  <b-modal
    v-if="Visible && PlayersCount > 0"
    v-model="Visible"
    hide-footer
    hide-header
    no-close-on-backdrop
  >
    <div v-if="PlayersCount == 2 || SkippedPlayersCount == 1">
      <p>
        Győzött a {{ TurnPlayerIndex + 1 }}. játékos ( {{ WinnerPlayerMark }} )
      </p>
    </div>
    <div v-else-if="SkippedPlayersCount != 0">
      <p>
        {{ SkippedPlayersCount }}. helyezett a {{ TurnPlayerIndex + 1 }}.
        játékos ( {{ WinnerPlayerMark }} )
      </p>
    </div>
    <b-button @click="newGame">Játék újra kezdése</b-button>
    <div
      v-if="
        PlayersCount > 2 &&
        SkippedPlayersCount != 0 &&
        PlayersCount - 1 != SkippedPlayersCount
      "
    >
      <b-button @click="gameContinuous">Játék folytatása</b-button>
    </div>
  </b-modal>
</template>
<script>
export default {
  name: "WinnerModal",
  props: {
    PlayersCount: Number,
    SkippedPlayersCount: Number,
    WinnerPlayerMark: String,
    Visible: Boolean,
    TurnPlayerIndex: Number,
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