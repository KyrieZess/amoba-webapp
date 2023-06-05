<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <eh-input
          label="Játékos neve"
          v-model="personName"
          @change="ChangedValue"
        />
      </b-col>
      <b-col cols="12">
        <eh-input
          label="Játékos jelének a színe"
          v-model="markColor"
          type="color"
          @change="ChangedValue"
        />
      </b-col>
      <b-col cols="12">
        <b-form-select
          class="m-2"
          v-model="mark"
          :state="IsValid"
          @change="ChangedValue"
        >
          <b-form-select-option :value="null">
            -- Válasszon amőba jelet --
          </b-form-select-option>
          <b-form-select-option value="X"> X </b-form-select-option>
          <b-form-select-option value="Y"> Y </b-form-select-option>
          <b-form-select-option value="O"> O </b-form-select-option>
          <b-form-select-option value="Z"> Z </b-form-select-option>
          <b-form-select-option value="A"> A </b-form-select-option>
          <b-form-select-option value="B"> B </b-form-select-option>
          <b-form-select-option value="C"> C </b-form-select-option>
          <b-form-select-option value="D"> D </b-form-select-option>
          <b-form-select-option value="E"> E </b-form-select-option>
          <b-form-select-option value="F"> F </b-form-select-option>
        </b-form-select>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: "PlayerSetting",
  model: {
    event: "change",
    prop: "Player",
  },
  props: {
    Player: Object,
    SelectedMarks: Array,
  },
  data() {
    return {
      personName: null,
      markColor: null,
      mark: null,
    };
  },
  watch: {
    Player(input) {
      this.SetPlayer(input);
    },
  },
  computed: {
    IsValid() {
      return this.mark != null && !this.SelectedMarks.includes(this.mark);
    },
  },
  methods: {
    ChangedValue() {
      if (
        !this.IsValid ||
        (this.personName == null &&
          this.mark == null &&
          (this.markColor == null || this.markColor == "#000000"))
      ) {
        this.$emit("change", null);
      } else if (this.IsValid) {
        this.$emit("change", {
          PersonName: this.personName,
          Mark: this.mark,
          MarkColor: this.markColor,
        });
      }
    },
    SetPlayer(input) {
      if (input != null) {
        this.personName = input.PersonName;
        this.markColor = input.MarkColor;
        this.mark = input.Mark;
      }
    },
  },
  mounted() {
    this.SetPlayer(this.Player);
  },
};
</script>