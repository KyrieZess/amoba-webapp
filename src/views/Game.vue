<template>
  <div>
    <GameSetting
      ref="gameSetting"
      @StartTheGame="startTheGame"
      @Restart="clearGameTable"
    />
    <div v-if="gameSetting != null" class="restart-game-button">
      <b-button variant="warning" @click="restartGame">
        <b-icon icon="arrow-clockwise" />
        Játék újraindtása
      </b-button>
    </div>
    <div v-if="players != null && players.length > 0" class="player-turn">
      Következő játékos:
      <b>
        {{ players[turnPlayerIndex].PersonName }} nevű játékos (
        {{ players[turnPlayerIndex].Mark }} )
      </b>
    </div>
    <GameTable
      ref="gameTable"
      :Table="playersSteps"
      @SelectSquare="selectSquare"
    />
    <WinnerModal
      :Visible="showWinnerModal"
      :Players="players"
      :SkippedPlayers="skippedPlayersIndex"
      :TurnPlayerIndex="turnPlayerIndex"
      :WinnerPlayerMark="winnerPlayer"
      @GameContinuous="gameContinuous"
      @NewGame="restartGame"
    />
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
      winnerMarkPieces: 0,
      gameSetting: null,
    };
  },
  methods: {
    // game continuos with the next player
    gameContinuous() {
      // add the next player
      this.turnPlayerIndex = this.setNextPlayer(this.turnPlayerIndex + 1);
      // close the winner modal
      this.showWinnerModal = false;
    },
    // start the game
    startTheGame(setting) {
      // set the setting for the game and the new game
      this.gameSetting = setting;
      // start the game
      this.startGame();
    },
    // restart the game
    restartGame() {
      // close the winner modal
      this.showWinnerModal = false;
      // set the next player index to the first (0 index)
      this.turnPlayerIndex = 0;
      // clear the skipped (winner) player list
      this.skippedPlayersIndex = null;
      // start the game
      this.startGame();
    },
    // start the game
    startGame() {
      // set the players
      this.players = this.gameSetting.Players;
      // set the winner mark number
      this.winnerMarkPieces = this.gameSetting.WinnerMarkPieces;
      // load the game table
      this.loadTheTable(this.gameSetting.TableSize);
    },
    // clear all of th game settings
    clearGameTable() {
      this.players = null;
      this.playersSteps = null;
      this.winnerMarkPieces = null;
      this.gameSetting = null;
    },
    // load the game table
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
      if (
        this.playersSteps[coordinates.y][coordinates.x] === "" ||
        this.playersSteps[coordinates.y][coordinates.x] == null
      ) {
        //add the mark to the empty field
        this.playersSteps[coordinates.y][coordinates.x] = {
          Mark: this.players[this.turnPlayerIndex].Mark,
          Color: this.players[this.turnPlayerIndex].MarkColor,
        };
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
    // set the next player
    setNextPlayer(index) {
      if (index >= this.players.length) {
        // step the first if the previous player was the last
        index = 0;
      }

      if (
        this.skippedPlayersIndex != null &&
        this.skippedPlayersIndex.includes(index)
      ) {
        // step the next if the player already won
        index = this.setNextPlayer(index + 1);
      }
      // return with the next player index
      return index;
    },
    // check if the user will win with this selected place
    checkWinner(x, y) {
      var leftUpDiagonal = [];
      var xCross = [];
      var leftDownDiagonal = [];
      var yCross = [];
      // set the first mark place indexes
      var xIndex = -1 * (this.winnerMarkPieces - 1);
      var yIndex = -1 * (this.winnerMarkPieces - 1);
      // set the table size
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
      const currentPlayerMark = this.players[this.turnPlayerIndex].Mark;

      // get the first current player's mark in the line
      var firstMarkIndex = marksCoordinatesList.findIndex(
        (x) => x.Mark === currentPlayerMark
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
          playerMarks.every((x) => x.Mark === currentPlayerMark)
        ) {
          this.onWinner(currentPlayerMark);
          return true;
        }
      }
      return false;
    },
    // set the winner, and add the index to the skipped players indexes list
    onWinner(winner) {
      this.showWinnerModal = true;
      this.winnerPlayer = winner;
      if (this.players.length > 2) {
        // if the players number more than 2, they can play until just one left
        if (this.skippedPlayersIndex == null) {
          this.skippedPlayersIndex = [];
        }
        // the current winner index add to the skipped players indexes list
        this.skippedPlayersIndex.push(
          this.players.findIndex((x) => x.Mark == winner)
        );
      }
    },
  },
};
</script>
