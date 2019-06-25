<template>
  <div class="border border-gray-100 rounded-lg shadow p-1">
    <div class="flex">
      <span class="p-3">
        <img src="~@/assets/icons/volume-up.svg" alt="" style="width: 1rem">
      </span>
      <span>
        <input
          class="slider p-2 pt-4"
          v-model="value"
          type="range"
          min="0"
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
  input[type=range].slider {
    -webkit-appearance: none;
  }

  input[type=range].slider::-webkit-slider-runnable-track {
    height: 5px;
    background: #e6e6e6;
    border: none;
    border-radius: 9px;
  }

  input[type=range].slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 3px #fff solid;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: rgb(119, 119, 119);
    margin-top: -7px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  input[type=range].slider:hover::-webkit-slider-thumb {
    cursor: pointer;
  }

  input[type=range].slider:focus {
    outline: none;
  }

  input[type=range].slider:hover::-webkit-slider-runnable-track {
    background: #c9c9c9;
  }
</style>
