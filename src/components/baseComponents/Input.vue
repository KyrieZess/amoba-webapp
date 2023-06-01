<template>
  <div>
    <input
      :style="inputStyle"
      class="eh-base-input"
      :class="setClass"
      @focus="isFocus = true"
      @blur="isFocus = false"
      :placeholder="placeholder ? placeholder : ' '"
      :disabled="disabled"
      :type="type ? type : 'text'"
      :pattern="pattern"
      :step="step"
      :min="min"
      :max="max"
      v-model="tempValue"
      :list="type == 'color' ? 'colorList' : null"
    />
    <span v-if="label" class="eh-base-input-floating-label" :style="labelStyle">
      {{ label }}
      <span v-if="required" class="text-danger">*</span>
    </span>
    <datalist v-if="list" id="colorList">
      <option v-for="color in list" :key="color" :value="color"></option>
    </datalist>
    <div class="eh-base-input-desc-error-box" :style="errorStyle">
      <div v-if="description" class="eh-base-input-description">
        <div v-html="description"></div>
      </div>
      <div v-if="!state && error" class="eh-base-input-error-text">
        {{ error }}
      </div>
    </div>
  </div>
</template>
<script>
//import moment from "moment";
export default {
  name: "eh-input",
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    inputStyle: String,
    labelStyle: String,
    errorStyle: String,
    label: String,
    disabled: Boolean,
    required: Boolean,
    placeholder: String,
    description: String,
    pattern: String,
    min: Number,
    max: Number,
    error: String,
    isInvalidInput: Boolean,
    type: String,
    value: [String, Number, FileList],
    state: { type: Boolean, default: true },
    list: Array,
    multiple: Boolean,
    step: { type: [String, Number], default: "any" },
  },
  data() {
    return {
      isFocus: false,
      tempValue: this.value,
    };
  },
  watch: {
    tempValue(input) {
      if (input == null) {
        this.$emit("change", null);
      } else if (this.type == "number" || this.type == "range") {
        this.$emit("change", Number.parseFloat(input));
      } else {
        this.$emit("change", input);
      }
    },
    value(input) {
      if (this.type != "file") {
        this.tempValue = input;
      }
    },
  },
  computed: {
    setClass() {
      var temp = "";
      if (this.label) {
        temp += " with-label ";
      } else {
        temp += " without-label ";
      }
      if (this.state) {
        temp += " valid-input ";
      } else {
        temp += " invalid-input ";
      }
      return temp;
    },
  },
  mounted() {
    if (this.value == null) {
      this.$emit("change", null);
    } else if (this.type == "number" || this.type == "range") {
      this.$emit("change", Number.parseFloat(this.value));
    } else {
      this.$emit("change", this.value);
    }
  },
};
</script>
