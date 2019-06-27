<template>
  <div
    :class="`shadow-lg p-4 mt-2 mr-2 mb-2 rounded-lg w-auto inline-block relative`"
    @click="onSelectChannel"
  >
    <!-- ${multipleSelectSelecting || patchSelecting ? 'border-2 border-green-400' : ''} -->
    <div class="expand absolute right-0 top-0 w-full text-right pr-1">
      <img class="inline" src="~@/assets/icons/exclamation-outline.svg" alt="" style="width: 1rem">
      <img v-if="multipleSelectSelected" class="inline" src="~@/assets/icons/link.svg" alt="" style="width: 1rem">
      <img v-if="patchSelected" class="inline" src="~@/assets/icons/load-balancer.svg" alt="" style="width: 1rem">
    </div>
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
      <div class="mb-3">
        <Slider />
      </div>
      <div>
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
import Indicators from './Indicators';

export default {
  components: {
    Slider,
    Table,
    Indicators,
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
  },
  methods: {
    onSelectChannel() {
      if (this.multipleSelectSelecting) {
        this.$store.dispatch('toggleSelectedChannel', this.channel);
      }

      if (this.patchSelecting) {
        this.$store.dispatch('togglePatchChannel', this.channel);
      }
    },
  },
  computed: {
    multipleSelectSelecting() {
      return this.$store.state.multiselect.selecting;
    },
    patchSelecting() {
      return this.$store.state.patch.selecting;
    },
    multipleSelectProfile() {
      return this.$store.state.multiselect.multipleSelect;
    },
    patchProfile() {
      return this.$store.state.patch.patch;
    },
    multipleSelectSelected() {
      if (this.$store.state.multiselect
        .multipleSelections[this.multipleSelectProfile].includes(this.channel)) {
        return true;
      }
      return false;
    },
    patchSelected() {
      if (this.$store.state.patch
        .patches[this.patchProfile].includes(this.channel)) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style>
</style>
