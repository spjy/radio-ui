<template>
  <div>
    <SectionTitle title="Scanner" />
    <div class="flex">
      <Enabler
        v-for="channel in channels"
        :label="channel"
        :key="channel"
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
    channels: {
      required: true,
    },
  },
  methods: {
    handleSwitch(channel, value) {
      if (value) {
        this.$store.dispatch('portable/addScanningChannel', channel);
      } else {
        this.$store.dispatch('portable/removeScanningChannel', channel);
      }
    },
  },
};
</script>

<style>
</style>
