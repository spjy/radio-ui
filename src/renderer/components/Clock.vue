<template>
  <div>
    {{ clock }}
  </div>
</template>

<script>
import moment from 'moment-timezone';

export default {
  data() {
    return {
      clock: moment().tz('America/Los_Angeles').format('HH:mm:ss'),
    };
  },
  mounted() {
    setInterval(() => {
      this.clock = moment().tz('America/Los_Angeles').format('HH:mm:ss');
    }, 1000);
  },
};
</script>

<style>
</style>
