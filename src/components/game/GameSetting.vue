<template>
  <div>
    <b-container v-if="!gameIsRun">
      <b-row class="text-center">
        <b-col cols="12"> Pálya beállításai </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" md="4">
          <eh-input
            id="table-x-size"
            label="Pálya szélessége"
            v-model="yAxisLength"
            type="number"
            :state="
              yAxisLength == null ||
              yAxisLength == 0 ||
              yAxisLength >= markPieces
            "
            :min="5"
            :max="100"
          />
        </b-col>
        <b-col cols="12" md="4">
          <eh-input
            id="table-y-size"
            label="Pálya magassága"
            v-model="xAxisLength"
            type="number"
            :state="
              xAxisLength == null ||
              xAxisLength == 0 ||
              xAxisLength >= markPieces
            "
            :min="5"
            :max="100"
          />
        </b-col>
        <b-col cols="12" md="4">
          <eh-input
            id="winner-mark-pieces"
            label="Nyertes darabszám"
            v-model="markPieces"
            type="number"
            :state="
              xAxisLength == null ||
              xAxisLength == 0 ||
              yAxisLength == null ||
              yAxisLength == 0 ||
              (xAxisLength >= markPieces && yAxisLength >= markPieces)
            "
            :min="3"
            :max="50"
          />
        </b-col>
      </b-row>
      <b-row class="text-center">
        <b-col cols="12"> Játékosok beállítása </b-col>
      </b-row>
      <b-row align-v="center">
        <b-col>
          <eh-input
            style="width: fit-content; margin: auto"
            label="Játékosok száma"
            type="number"
            :min="0"
            :max="10"
            @change="setPlayersNumber"
          />
        </b-col>
      </b-row>
      <b-row v-if="players != null">
        <b-col
          v-for="(player, index) in players"
          :key="'game-player-' + index"
          cols="12"
          md="4"
        >
          <b-form-select class="m-2" v-model="players[index]">
            <b-form-select-option :value="null">
              -- Válasszon amőba jelet --
            </b-form-select-option>
            <b-form-select-option value="X"> X </b-form-select-option>
            <b-form-select-option value="Y"> Y </b-form-select-option>
            <b-form-select-option value="O"> O </b-form-select-option>
            <b-form-select-option value="Z"> Z </b-form-select-option>
            <b-form-select-option value="Z1"> Z1 </b-form-select-option>
            <b-form-select-option value="Z2"> Z2 </b-form-select-option>
            <b-form-select-option value="Z3"> Z3 </b-form-select-option>
            <b-form-select-option value="Z4"> Z4 </b-form-select-option>
            <b-form-select-option value="Z5"> Z5 </b-form-select-option>
            <b-form-select-option value="Z6"> Z6 </b-form-select-option>
          </b-form-select>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button @click="startTheGame">Kezdés!</b-button>
        </b-col>
      </b-row>
    </b-container>
    <div v-else>
      <b-button @click="restartGame">Játék újrakezdés</b-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "GameSetting",
  data() {
    return {
      players: [],
      gameIsRun: false,
      xAxisLength: null,
      yAxisLength: null,
      markPieces: null,
    };
  },
  methods: {
    // set players mark
    setPlayersNumber(personNum) {
      // check if the players is null
      if (this.players == null) {
        // create a number of person length array with null
        this.players = new Array(personNum);
        this.players.fill(null);
      } else {
        //check the number of players
        if (this.players.length > personNum) {
          // if the number of players greater than selected person number
          // cut off the last players' marks
          this.players = this.players.slice(0, personNum);
        } else if (this.players.length < personNum) {
          // if the number of players less than selected person number
          // calculate the difference between selected person number and number of players
          const diff = personNum - this.players.length;
          // create array with diff number length
          const array = new Array(diff);
          array.fill(null);
          // concat the players array and the new null array
          this.players = [...this.players, ...array];
        }
      }
    },
    // send the game setting object to the parent node
    startTheGame() {
      this.$emit("StartTheGame", {
        TableSize: { x: this.xAxisLength, y: this.yAxisLength },
        WinnerMarkPieces: this.markPieces,
        Players: this.players,
      });

      this.gameIsRun = true;
    },
    // reset the game setting data
    restartGame() {
      this.xAxisLength = null;
      this.yAxisLength = null;
      this.markPieces = null;
      this.gameIsRun = false;

      this.$emit("Restart");
    },
  },
};
</script>