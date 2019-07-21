<template>
  <div
    :class="`shadow p-4 mt-2 mr-2 mb-2 rounded-lg w-auto inline-block relative ${multipleSelectSelecting || patchSelecting ? 'select-mode cursor-pointer select-none' : ''}`"
    @click="onSelectChannel"
  >
    <!-- ${multipleSelectSelecting || patchSelecting ? 'border-2 border-green-400' : ''} -->
    <div class="expand absolute right-0 top-0 w-full text-right pr-1 mt-1">
      <!-- <i style="font-size: 22px;" class="material-icons text-green-500">mic</i> -->
      <transition name="fade">
        <i v-if="multipleSelectSelected" style="font-size: 22px;" class="material-icons text-red-600">link</i>
      </transition>
      <transition name="fade">
        <i v-if="patchSelected" style="font-size: 22px;" class="material-icons text-orange-500">healing</i>
      </transition>
      <!-- <img v-if="multipleSelectSelected" class="inline" src="~@/assets/icons/link.svg" alt="" style="width: 1rem">
      <img v-if="patchSelected" class="inline" src="~@/assets/icons/load-balancer.svg" alt="" style="width: 1rem"> -->
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
        this.$store.dispatch('dispatch/toggleSelectedChannel', this.channel);
      }

      if (this.patchSelecting) {
        this.$store.dispatch('dispatch/togglePatchChannel', this.channel);
      }
    },
  },
  computed: {
    multipleSelectSelecting() {
      return this.$store.state.dispatch.multiselect.selecting;
    },
    patchSelecting() {
      return this.$store.state.dispatch.patch.selecting;
    },
    multipleSelectProfile() {
      return this.$store.state.dispatch.multiselect.multipleSelect;
    },
    patchProfile() {
      return this.$store.state.dispatch.patch.patch;
    },
    multipleSelectSelected() {
      if (this.$store.state.dispatch.multiselect
        .multipleSelections[this.multipleSelectProfile].includes(this.channel)) {
        return true;
      }
      return false;
    },
    patchSelected() {
      if (this.$store.state.dispatch.patch
        .patches[this.patchProfile].includes(this.channel)) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style scoped>
.select-mode:hover {
  box-shadow: 0 0 5px green;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
