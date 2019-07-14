<template>
  <div>
    <ul class="flex border overflow-x-auto overflow-y-hidden rounded-t">
      <li
        v-for="tab in tabs"
        :class="`mr-1 ${selected === tab ? '-mb-px' : ''}`"
        :key="tab"
      >
        <a
          :class="`bg-white inline-block py-2 px-4 ${selected === tab ? 'text-blue-700 font-semibold border-b-4 border-blue-400' : 'text-black-500 hover:text-blue-800'}`"
          href="#"
          @click="onSelectTab(tab, $event)"
        >
          {{ tab }}
        </a>
      </li>
    </ul>
    <div
      v-if="selected === tab"
      v-for="tab in tabs" class="border-b border-r border-l rounded-b-lg p-4"
      :key="tab"
    >
      <div class="flex mb-3">
        <div class="flex-1 w-full m-1">
          <div
            :class="`${selecting ? 'select-active bg-gray-200' : ''} cursor-pointer text-center bg-white hover:bg-gray-200 text-gray-800 font-semibold p-1 border border-gray-400 rounded p-1`"
            @click="onSelectAction(tab)"
          >
            Select
          </div>
        </div>
        <div class="flex-1 w-full m-1">
          <div
            :class="`${active ? 'action-active bg-red-600 text-white' : 'text-gray-800'} cursor-pointer text-center bg-red-100 hover:bg-red-600 hover:text-white font-semibold p-1 border border-gray-400 rounded p-1`"
            @click="onActivate"
          >
            {{ activationType }}
          </div>
        </div>
      </div>
      <slot :name="tab"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: this.selectedInitial,
    };
  },
  methods: {
    onSelectTab(tab, e) {
      e.preventDefault();

      // Change tab view
      if (this.selected === tab) {
        this.selected = '';
      } else {
        this.selected = tab;
      }

      // Disable selecting if changing tabs
      if (this.selecting && this.activationType === 'Tx') {
        this.$store.dispatch('toggleSelectingChannel');
      } else if (this.selecting && this.activationType === 'Patch') {
        this.$store.dispatch('toggleSelectingPatch');
      }

      if (this.active && this.activationType === 'Tx') {
        this.$store.dispatch('toggleTxActive');
      } else if (this.active && this.activationType === 'Patch') {
        this.$store.dispatch('togglePatchActive');
      }

      // Change profile when switching tabs
      if (this.activationType === 'Tx') {
        this.$store.dispatch('setMultipleSelectProfile', tab);
      } else if (this.activationType === 'Patch') {
        this.$store.dispatch('setPatchesProfile', tab);
      }
    },
    onSelectAction(tab) {
      if (this.activationType === 'Tx') {
        this.$store.dispatch('toggleSelectingChannel');
        this.$store.dispatch('setMultipleSelectProfile', tab);
      } else if (this.activationType === 'Patch') {
        this.$store.dispatch('toggleSelectingPatch');
        this.$store.dispatch('setPatchesProfile', tab);
      }
    },
    onActivate() {
      if (this.activationType === 'Tx') {
        this.$store.dispatch('toggleTxActive');
      } else if (this.activationType === 'Patch') {
        this.$store.dispatch('togglePatchActive');
      }
    },
  },
  computed: {
    selecting() {
      if (this.activationType === 'Tx') {
        return this.$store.state.multiselect.selecting;
      } else if (this.activationType === 'Patch') {
        return this.$store.state.patch.selecting;
      }
      return false;
    },
    multipleSelect() {
      if (this.activationType === 'Tx') {
        return this.$store.state.multiselect.multipleSelect;
      } else if (this.activationType === 'Patch') {
        return this.$store.state.patch.patch;
      }
      return null;
    },
    multipleSelections() {
      if (this.activationType === 'Tx') {
        return this.$store.state.multiselect.multipleSelections;
      } else if (this.activationType === 'Patch') {
        return this.$store.state.patch.patches;
      }
      return {};
    },
    active() {
      if (this.activationType === 'Tx') {
        return this.$store.state.multiselect.txActive;
      } else if (this.activationType === 'Patch') {
        return this.$store.state.patch.patchActive;
      }
      return false;
    },
  },
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    selectedInitial: {
      type: String,
      required: true,
    },
    activationType: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
  .select-active {
    animation: shadow-pulse-select 1s infinite;
  }

  .action-active {
    animation: shadow-pulse-action 1s infinite;
  }

  @keyframes shadow-pulse-select {
    0% {
      box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
    }
    100% {
      box-shadow: 0 0 0 7px rgba(0, 0, 0, 0);
    }
  }

  @keyframes shadow-pulse-action {
    0% {
      box-shadow: 0 0 0 0px rgba(192, 18, 18, 0.5);
    }
    100% {
      box-shadow: 0 0 0 7px rgba(179, 67, 67, 0);
    }
  }
</style>
