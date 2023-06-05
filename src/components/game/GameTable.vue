<template>
  <div v-if="Table != null">
    <b-container id="zoom-button">
      <b-row>
        <b-col>
          <b-button
            v-b-tooltip.hover="$t('GameTable.ZoomIn')"
            @click="zoomIn"
            size="sm"
            variant="info"
          >
            <b-icon icon="zoom-in" />
          </b-button>
        </b-col>
        <b-col>
          <b-button
            @click="reset"
            size="sm"
            v-b-tooltip.hover="$t('GameTable.ZoomReset')"
          >
            <b-icon icon="arrow-counterclockwise" />
          </b-button>
        </b-col>
        <b-col>
          <b-button
            :disabled="fontSize <= 15"
            @click="zoomOut"
            size="sm"
            variant="info"
            v-b-tooltip.hover="$t('GameTable.ZoomOut')"
          >
            <b-icon icon="zoom-out" />
          </b-button>
        </b-col>
      </b-row>
    </b-container>
    <div id="game-table">
      <table>
        <tr v-for="(y, yIndex) in Table" :key="'y-' + yIndex">
          <td v-for="(x, xIndex) in y" :key="'x-' + xIndex">
            <div
              class="square"
              :style="'width:' + fieldSize + 'px;height:' + fieldSize + 'px;'"
              @click="$emit('SelectSquare', { x: xIndex, y: yIndex })"
            >
              <div
                class="game-mark"
                :style="'color:' + x.Color + ';font-size:' + fontSize + 'px;'"
              >
                {{ x.Mark }}
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
    // reset the zoom setting to the default values
    reset() {
      this.fieldSize = 50;
      this.fontSize = 30;
    },
    // zoom in with fix 10px
    zoomIn() {
      this.fieldSize += 10;
      this.fontSize += 10;
    },
    // zoom out with fix 10px
    zoomOut() {
      this.fieldSize -= 10;
      this.fontSize -= 10;
    },
    // force refresh the table
    refreshTable() {
      this.$forceUpdate();
    },
  },
};
</script>