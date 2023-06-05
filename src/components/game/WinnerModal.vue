<template>
  <b-modal
    v-if="Visible && PlayersCount > 0"
    v-model="Visible"
    size="md"
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
          {{
            $t("WinnerModal.PlayerWon", {
              name: Players[TurnPlayerIndex].PersonName,
            })
          }}
          ( {{ Players[TurnPlayerIndex].Mark }} )
        </h1>
      </div>
      <div v-else-if="SkippedPlayersCount > 0">
        <div
          v-for="(playerIndex, index) in SkippedPlayers"
          :key="'player' + playerIndex"
        >
          <h2 v-if="index == TurnPlayerIndex">
            {{ WinnerText(index + 1, playerIndex) }}
            ( {{ Players[playerIndex].Mark }} )
          </h2>
          <h3 v-else>
            {{ WinnerText(index + 1, playerIndex) }}
            ( {{ Players[playerIndex].Mark }} )
          </h3>
        </div>
      </div>
    </div>
    <b-container>
      <b-row>
        <b-col>
          <b-button @click="newGame">
            {{ $t("WinnerModal.RestartGame") }}
          </b-button>
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
            <b-button @click="gameContinuous">
              {{ $t("WinnerModal.GameContinuous") }}
            </b-button>
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
    WinnerText(place, playerIndex) {
      switch (place) {
        case 1:
          return this.$t("WinnerModal.FirstPlayer", {
            name: this.Players[playerIndex].PersonName,
          });
        case 2:
          return this.$t("WinnerModal.SecondPlayer", {
            name: this.Players[playerIndex].PersonName,
          });
        case 3:
          return this.$t("WinnerModal.ThirdPlayer", {
            name: this.Players[playerIndex].PersonName,
          });
        default:
          return this.$t("WinnerModal.OtherWinnerPlayer", {
            name: this.Players[playerIndex].PersonName,
            place: place,
          });
      }
    },
  },
};
</script>