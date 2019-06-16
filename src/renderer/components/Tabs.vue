<template>
  <div>
    <ul class="flex border-b">
      <li
        v-for="tab in tabs"
        :class="`mr-1 ${selected === tab ? '-mb-px' : ''}`"
        :key="tab"
      >
        <a
          :class="`bg-white inline-block py-2 px-4 ${selected === tab ? 'rounded-t border-l border-t border-r text-blue-700 font-semibold' : 'text-blue-500 hover:text-blue-800'}`"
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
      this.selected = tab;
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
  },
};
</script>

<style>
</style>
