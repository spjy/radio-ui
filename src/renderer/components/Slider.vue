<template>
  <div class="border border-gray-100 rounded-lg shadow p-1">
    <div class="flex">
      <span class="p-2">
        V
      </span>
      <span>
        <input
          class="slider p-2 pt-3"
          v-model="value"
          type="range"
          min="1"
          max="100"
        />
      </span>
      <span class="p-2">
        {{ value }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 50,
    };
  },
};
</script>

<style>
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 21px;
    height: 25px;
    background: #4CAF50;
    cursor: pointer;
  }

  .slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #4CAF50;
    cursor: pointer;
  }
</style>
