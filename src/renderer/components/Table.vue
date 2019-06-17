<template>
  <div class="h-24 overflow-y-scroll shadow rounded">
    <div class="table w-full p-1">
      <div
        v-for="unit in txHistory"
        :key="unit.number"
      >
        <div class="table-row">
          <div class="table-cell text-gray-700 px-1 py-1 text-sm">{{ unit.number }}</div>
          <div class="table-cell text-gray-700 px-1 py-1 text-sm">{{ unit.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    txHistory: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style>
  /* width */
  ::-webkit-scrollbar {
    width: 7px;
    height: 4px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: .25rem;

  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #d0d0d0;
    border-radius: .25rem;

  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #919191;
    border-radius: .25rem;
  }
</style>
