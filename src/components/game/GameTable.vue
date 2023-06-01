<template>
  <div v-if="Table != null">
    <div id="zoom-button">
      <b-button @click="zoomIn">Nagyítás</b-button>
      <b-button @click="reset">Visszaállítás</b-button>
      <b-button :disabled="fontSize <= 15" @click="zoomOut"
        >Kicsinyítés</b-button
      >
    </div>
    <div id="game-table">
      <table>
        <tr v-for="(y, yIndex) in Table" :key="'y-' + yIndex">
          <td v-for="(x, xIndex) in y" :key="'x-' + xIndex">
            <div
              class="square"
              @click="$emit('SelectSquare', { x: xIndex, y: yIndex })"
            >
              <div class="game-mark">
                {{ x }}
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameTable",
  props: {
    Table: Array,
  },
  data() {
    return {
      fieldSize: 50,
      fontSize: 30,
    };
  },
  methods: {
    reset() {
      this.fieldSize = 50;
      this.fontSize = 30;
      this.setTableFieldSize(this.fieldSize, this.fontSize);
    },
    // zoom in with fix 10px
    zoomIn() {
      this.fieldSize += 10;
      this.fontSize += 10;
      this.setTableFieldSize(this.fieldSize, this.fontSize);
    },
    // zoom out with fix 10px
    zoomOut() {
      this.fieldSize -= 10;
      this.fontSize -= 10;
      this.setTableFieldSize(this.fieldSize, this.fontSize);
    },
    // set the new size to the table squares
    setTableFieldSize(fieldSize, fontSize) {
      // get the elements with square class name
      const squareElements = document.getElementsByClassName("square");

      for (let i = 0; i < squareElements.length; i++) {
        const element = squareElements[i];
        // set the new size to the current element
        element.style.width = fieldSize + "px";
        element.style.height = fieldSize + "px";

        element.firstChild.style.fontSize = fontSize + "px";
      }
    },
    // force refresh the table
    refreshTable() {
      this.$forceUpdate();
    },
  },
};
</script>