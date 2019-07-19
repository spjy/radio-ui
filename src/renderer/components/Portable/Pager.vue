<template>
  <div>
    <SectionTitle title="Pager" />
    <div class="flex">
      <Enabler
        v-for="tone in tones"
        :label="tone"
        :key="tone"
        @toggled-switch="handleSwitch"
      />
    </div>
  </div>
</template>

<script>
import SectionTitle from '../SectionTitle';
import Enabler from '../Enabler';

export default {
  components: {
    SectionTitle,
    Enabler,
  },
  props: {
    tones: {
      required: true,
    },
  },
  methods: {
    handleSwitch(channel, value) {
      if (value) {
        this.$store.dispatch('portable/addPagingChannel', channel);
      } else {
        this.$store.dispatch('portable/removePagingChannel', channel);
      }
    },
  },
};
</script>

<style>
</style>
