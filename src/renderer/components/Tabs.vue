<template>
  <div>
    <ul class="flex border-b overflow-x-scroll overflow-y-hidden">
      <li
        v-for="tab in tabs"
        :class="`mr-1 ${selected === tab ? '-mb-px' : ''}`"
        :key="tab"
      >
        <a
          :class="`bg-white inline-block py-2 px-4 ${selected === tab ? 'rounded-t border-l border-t border-r text-blue-700 font-semibold bg-blue-100' : 'text-blue-500 hover:text-blue-800'}`"
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
            :class="`${selecting ? 'select-active bg-gray-200' : ''} cursor-pointer text-center bg-white hover:bg-gray-100 text-gray-800 font-semibold p-1 border border-gray-400 rounded p-1`"
            @click="onSelect(tab)"
          >
            Select
          </div>
        </div>
        <div class="flex-1 w-full m-1">
          <div
            :class="`${txActive ? 'action-active bg-red-600' : ''} cursor-pointer text-center bg-red-100 hover:bg-red-600 text-gray-800 font-semibold p-1 border border-gray-400 rounded p-1`"
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

      if (this.selected === tab) {
        this.selected = '';
      } else {
        this.selected = tab;
      }
    },
    onSelect(tab) {
      if (this.activationType === 'Tx') {
        this.$store.dispatch('toggleSelectingChannel');
        this.$store.dispatch('setMultipleSelectProfile', tab);
      }
    },
    onActivate() {
      if (this.activationType === 'Tx') {
        this.$store.dispatch('toggleTxActive');
      }
    },
  },
  computed: {
    selecting() {
      return this.$store.state.MultipleSelect.selecting;
    },
    multipleSelect() {
      return this.$store.state.MultipleSelect.multipleSelect;
    },
    multipleSelections() {
      return this.$store.state.MultipleSelect.multipleSelections;
    },
    txActive() {
      return this.$store.state.MultipleSelect.txActive;
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
