<template>
  <div :class="`shadow-lg p-4 mt-2 mr-2 mb-2 rounded-lg w-auto inline-block ${selected ? 'border-2 border-green-400' : ''}`">
    <div class="flex flex-col">
      <div class="mb-4">
        <div class="flex">
          <div class="flex-initial pr-4">
            <div class="rounded-full h-12 w-12 flex items-center justify-center bg-blue-200 shadow-md hover:bg-red-400">Tx</div>
          </div>
          <div class="flex-initial">
            <div class="text-lg font-bold">
              {{ channel }}
            </div>
            <div class="text-gray-600 text-sm">
              {{ lastTx }}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Slider />
      </div>
      <div class="mt-3">
        <Table
          :txHistory="txHistory"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Slider from './Slider';
import Table from './Table';

export default {
  components: {
    Slider,
    Table,
  },
  props: {
    transmitting: {
      type: Boolean,
      default: false,
    },
    channel: {
      type: String,
      required: true,
    },
    lastTx: {
      type: String,
      default: '',
    },
    txHistory: {
      type: Array,
      default: () => [],
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
</style>
