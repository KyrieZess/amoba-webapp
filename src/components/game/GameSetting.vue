<template>
  <div>
    <b-container v-if="settingIsOpen">
      <b-row class="text-center">
        <b-col cols="12"> Pálya beállításai </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" md="4">
          <eh-input
            id="table-x-size"
            label="Pálya szélessége"
            :required="true"
            v-model="yAxisLength"
            type="number"
            :state="
              yAxisLength == null ||
              yAxisLength == 0 ||
              yAxisLength >= markPieces
            "
            error="A pálya túl kicsi ahhoz, hogy a nyertes darabszámú jel elférjen. Adjon meg nagyobb tábla méretet vagy állítson kisebb nyertes darabszámot."
            :min="5"
            :max="100"
            description="A mező minimum 5, maximum 100 értéket vehet fel"
          />
        </b-col>
        <b-col cols="12" md="4">
          <eh-input
            id="table-y-size"
            label="Pálya magassága"
            :required="true"
            v-model="xAxisLength"
            type="number"
            :state="
              xAxisLength == null ||
              xAxisLength == 0 ||
              xAxisLength >= markPieces
            "
            error="A pálya túl kicsi ahhoz, hogy a nyertes darabszámú jel elférjen. Adjon meg nagyobb tábla méretet vagy állítson kisebb nyertes darabszámot."
            :min="5"
            :max="100"
            description="A mező minimum 5, maximum 100 értéket vehet fel"
          />
        </b-col>
        <b-col cols="12" md="4">
          <eh-input
            id="winner-mark-pieces"
            label="Nyertes darabszám"
            :required="true"
            v-model="markPieces"
            type="number"
            :state="
              xAxisLength == null ||
              xAxisLength == 0 ||
              yAxisLength == null ||
              yAxisLength == 0 ||
              (xAxisLength >= markPieces && yAxisLength >= markPieces)
            "
            error="A nyertes darabszám túl sok, ahhoz hogy a pályán elférjen! Adjon meg kisebb nyertes darabszámot vagy a pályát állítsa nagyobbra."
            :min="3"
            :max="50"
            description="A mező minimum 3, maximum 50 értéket vehet fel"
          />
        </b-col>
      </b-row>
      <b-row class="text-center pt-3">
        <b-col cols="12"> Játékosok beállítása </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="4">
          <eh-input
            style="width: fit-content; margin: auto"
            label="Játékosok száma"
            description="A játékosok száma minimum 2, maximum 10 lehet. Egy jelet egyszere csak egy játékos választhat! "
            :required="true"
            type="number"
            :min="2"
            :max="10"
            :value="playerNumber"
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
          <b-form-select
            class="m-2"
            v-model="players[index]"
            :state="
              player != null &&
              !players.some(
                (x) => x == players[index] && players.indexOf(x) != index
              )
            "
          >
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
          <b-button
            :disabled="formIsInvalidToStartTheGame"
            @click="startTheGame"
          >
            Kezdés!
          </b-button>
        </b-col>
      </b-row>
    </b-container>
    <div v-else style="text-align: center">
      <b-button @click="openSettings">
        <b-icon icon="gear-fill" />
        Játék beállításai
      </b-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "GameSetting",
  data() {
    return {
      players: null,
      settingIsOpen: true,
      xAxisLength: null,
      yAxisLength: null,
      markPieces: null,
      playerNumber: null,
    };
  },
  computed: {
    formIsInvalidToStartTheGame() {
      return (
        this.players == null ||
        (this.players != null && this.players.length < 2) ||
        (this.players != null &&
          this.players.length > 1 &&
          (this.players.some((x) => x == null) ||
            this.players.some((x, xIndex) =>
              this.players.some((y, yIndex) => y == x && xIndex != yIndex)
            ))) ||
        this.markPieces == null ||
        this.xAxisLength == null ||
        this.yAxisLength <= this.markPieces ||
        this.yAxisLength == null ||
        this.yAxisLength <= this.markPieces
      );
    },
  },
  methods: {
    // set players mark
    setPlayersNumber(personNum) {
      this.playerNumber = personNum;
      if (personNum == null || personNum < 2) {
        this.players = null;
        return;
      }
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

      this.settingIsOpen = false;
    },
    // open settings
    openSettings() {
      if (
        confirm(
          "A játék beállításának módosításával új játék fog indulni. Folytatja?"
        )
      ) {
        this.settingIsOpen = true;

        this.$emit("Restart");
      }
    },
  },
};
</script>