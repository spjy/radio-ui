<template>
  <div class="font-bold text-2xl font-bold pb-3">{{ title }}</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>
