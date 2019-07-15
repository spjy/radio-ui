<template>
  <div class="flex">
    <div
      v-for="channel in channels"
      class="border border-gray-300 rounded shadow py-3 px-3 mr-2 mb-2 inline text-center"
      :key="channel"
    >
      <div class="mb-2 text-sm text-gray-600">{{ channel }}</div>
      <label class="switch">
        <input type="checkbox">
        <span class="switcher round"></span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    channels: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>
