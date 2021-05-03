<template>
  <div class="flex">
    <div
      class="border border-gray-300 rounded shadow py-3 px-3 mr-2 mb-2 inline text-center"
    >
      <div class="mb-2 text-sm text-gray-600">{{ label }}</div>
      <label class="switch">
        <input
          type="checkbox"
          @click="toggleSwitch"
        >
        <span class="switcher round"></span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggleSwitch(e) {
      this.$emit('toggled-switch', this.label, e.target.checked);
    },
  },
};
</script>

<style>
</style>
