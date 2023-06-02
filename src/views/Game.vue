<template>
  <div>
    <GameSetting
      ref="gameSetting"
      @StartTheGame="startTheGame"
      @Restart="restart"
    />
    <div v-if="players != null && players.length > 0">
      {{ players[turnPlayerIndex] }}
    </div>
    <GameTable
      ref="gameTable"
      :Table="playersSteps"
      @SelectSquare="selectSquare"
    />
    <b-modal v-model="showWinnerModal" hide-footer hide-header>
      <p>WINNER {{ winnerPlayer }}</p>
      <b-button>Játék újra kezdése</b-button>
    </b-modal>
  </div>
</template>

<script>
import GameTable from "../components/game/GameTable.vue";
import GameSetting from "../components/game/GameSetting.vue";
import WinnerModal from "../components/game/WinnerModal.vue";

export default {
  name: "Game",
  components: { GameTable, GameSetting, WinnerModal },
  data() {
    return {
      showWinnerModal: false,
      winnerPlayer: null,
      players: null,
      skippedPlayersIndex: null,
      turnPlayerIndex: 0,
      playersSteps: null,
      winnerCoordinates: [],
      winnerMarkPieces: 0,
    };
  },
  methods: {
    startTheGame(setting) {
      this.players = setting.Players;
      this.winnerMarkPieces = setting.WinnerMarkPieces;
      this.loadTheTable(setting.TableSize);
    },
    restart() {
      this.players = null;
      this.playersSteps = null;
      this.winnerMarkPieces = null;
    },
    loadTheTable(tableSize) {
      // create x axis line
      let xArray = new Array(tableSize.y);
      xArray.fill("");

      // create y axis line
      let yArray = [];
      // instead of fill, this method fill the array non-referenced objects
      for (let i = 0; i < tableSize.x; i++) {
        // non-referenced copy
        yArray.push(JSON.parse(JSON.stringify(xArray)));
      }

      this.playersSteps = yArray;
    },
    selectSquare(coordinates) {
      // check if the field is empty
      if (this.playersSteps[coordinates.y][coordinates.x] === "") {
        //add the mark to the empty field
        this.playersSteps[coordinates.y][coordinates.x] =
          this.players[this.turnPlayerIndex];
        //refresh the ui
        this.$refs.gameTable.refreshTable();
        //check if the user won with this step
        const hasWinner = this.checkWinner(coordinates.x, coordinates.y);

        if (hasWinner) {
          return;
        }
        // if has not winner then step the next player who stay in the game yet
        this.turnPlayerIndex = this.setNextPlayer(this.turnPlayerIndex + 1);
      }
    },
    setNextPlayer(index) {
      if (index >= this.players.length) {
        // step the first if the previous player was the last
        index = 0;
      }

      if (
        this.skippedPlayersIndex != null &&
        this.skippedPlayersIndex.includes(index)
      ) {
        index = this.setNextPlayer(index + 1);
      }

      return index;
    },
    checkWinner(x, y) {
      var leftUpDiagonal = [];
      var xCross = [];
      var leftDownDiagonal = [];
      var yCross = [];

      var xIndex = -1 * (this.winnerMarkPieces - 1);
      var yIndex = -1 * (this.winnerMarkPieces - 1);

      const xTableLength = this.playersSteps[0].length - 1;
      const yTableLength = this.playersSteps.length - 1;

      // check the place around the current step
      for (let i = 0; i < xTableLength; i++) {
        // group the marks on the left to up diagonal
        if (
          x + xIndex >= 0 &&
          x + xIndex <= xTableLength &&
          y + yIndex >= 0 &&
          y + yIndex <= yTableLength
        ) {
          leftUpDiagonal.push(this.playersSteps[y + yIndex][x + xIndex]);
        }
        // group the marks on the x axis
        if (x + xIndex >= 0 && x + xIndex <= xTableLength) {
          xCross.push(this.playersSteps[y][x + xIndex]);
        }
        // group the marks on the left to down diagonal
        if (
          x + xIndex >= 0 &&
          x + xIndex <= xTableLength &&
          y - yIndex >= 0 &&
          y - yIndex <= yTableLength
        ) {
          leftDownDiagonal.push(this.playersSteps[y - yIndex][x + xIndex]);
        }
        // group the marks on the y axis
        if (y + yIndex >= 0 && y + yIndex <= yTableLength) {
          yCross.push(this.playersSteps[y + yIndex][x]);
        }

        xIndex++;
        yIndex++;
      }

      // check if has a winner line
      var hasWinner = false;

      hasWinner = this.checkMarksCoordinates(leftUpDiagonal);

      if (!hasWinner) {
        hasWinner = this.checkMarksCoordinates(xCross);
      }
      if (!hasWinner) {
        hasWinner = this.checkMarksCoordinates(leftDownDiagonal);
      }
      if (!hasWinner) {
        hasWinner = this.checkMarksCoordinates(yCross);
      }

      return hasWinner;
    },
    checkMarksCoordinates(marksCoordinatesList) {
      // get the current player mark
      const currentPlayerMark = this.players[this.turnPlayerIndex];

      // get the first current player's mark in the line
      var firstMarkIndex = marksCoordinatesList.findIndex(
        (x) => x === currentPlayerMark
      );

      // if the first mark index is less than 5 and greater or equal to 0
      // and if the next marks are the same mark then the current user able to win
      if (firstMarkIndex < this.winnerMarkPieces && firstMarkIndex >= 0) {
        // split the current line from the first current player mark to plus 5 field
        // those has to be the same marks
        var playerMarks = marksCoordinatesList.slice(
          firstMarkIndex,
          firstMarkIndex + this.winnerMarkPieces
        );

        // check if these fields every elements are the same current player's mark
        if (
          playerMarks.length === this.winnerMarkPieces &&
          playerMarks.every((x) => x === currentPlayerMark)
        ) {
          this.onWinner(currentPlayerMark);
          return true;
        }
      }
      return false;
    },
    onWinner(winner) {
      this.showWinnerModal = true;
      this.winnerPlayer = winner;
      if (this.players.length > 2) {
        if (this.skippedPlayersIndex == null) {
          this.skippedPlayersIndex = [];
        }
        this.skippedPlayersIndex.push(
          this.players.findIndex((x) => x == winner)
        );
      }
    },
  },
};
</script>
