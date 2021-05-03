<template>
  <form class="w-full">
    <div class="flex flex-wrap -mx-3 mb-1">
      <div class="w-full px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
          {{ name }}
        </label>
        <input
          class="appearance-none block w-full bg-gray-100 text-gray-800 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="type"
          :placeholder="name"
          :value="facadeCombination.join(' + ').toUpperCase()"
          @keydown="reset"
          @change="change"
          @focus="recordKeys"
          @blur="stopRecordingKeys"
        >
        <span class="text-red-600 text-xs cursor-pointer mr-1" @click="reset">Reset</span>
        <span class="text-green-500 text-xs cursor-pointer mr-1" @click="save">Save</span>
        <span v-if="hotkey" class="text-gray-500 text-xs">{{ hotkey.join(' + ').toUpperCase() }}</span>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    name: {
      required: true,
      type: String,
    },
    type: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      keyCombination: [],
      facadeCombination: [],
    };
  },
  methods: {
    change(e) {
      e.preventDefault();
    },
    handleKeyUp(e) {
      this.keyCombination.push(e.code);
      this.facadeCombination.push(e.key);
    },
    recordKeys() {
      window.addEventListener('keyup', this.handleKeyUp);
    },
    stopRecordingKeys() {
      window.removeEventListener('keyup', this.handleKeyUp);
    },
    reset() {
      this.keyCombination = [];
      this.facadeCombination = [];

      this.$store.dispatch('saveHotkey', {
        type: this.type,
        name: this.name,
        hotkey: [],
      });
    },
    save() {
      this.$store.dispatch('saveHotkey', {
        type: this.type,
        name: this.name,
        hotkey: this.facadeCombination,
      });
    },
  },
  computed: {
    hotkey() {
      if (this.$store.state.session.hotkeys[this.type][this.name]) {
        return this.$store.state.session.hotkeys[this.type][this.name];
      }
      return null;
    },
  },
};
</script>

<style>
</style>
