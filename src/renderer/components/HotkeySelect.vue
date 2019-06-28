<template>
  <form class="w-full">
    <div class="flex flex-wrap -mx-3 mb-1">
      <div class="w-full px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
          {{ type }}
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="type"
          placeholder="Main Hotkey"
          :value="mainTx.reverse().join(' + ')"
          @keydown="reset"
          @change="change"
          @focus="recordKeys"
          @blur="stopRecordingKeys"
        >
        <p class="text-red-600 text-xs cursor-pointer" @click="reset">Reset</p>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    type: {
      required: true,
    },
  },
  data() {
    return {
      mainTx: [],
    };
  },
  methods: {
    change(e) {
      e.preventDefault();
    },
    handleKeyUp(e) {
      this.mainTx.push(e.code);
    },
    recordKeys() {
      window.addEventListener('keyup', this.handleKeyUp);
    },
    stopRecordingKeys() {
      window.removeEventListener('keyup', this.handleKeyUp);
    },
    reset() {
      this.mainTx = [];
    },
  },
};
</script>

<style>
</style>
