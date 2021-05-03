<template>
  <div class="flex bg-gray-100 shadow-md p-3 justify-between">
    <router-link to="/" class="text-3xl text-blue-600 hover:underline cursor-pointer">&#8592;</router-link>&nbsp;
    <div class="flex-initial">
      <div class="text-3xl">
        {{ page }}
      </div>
    </div>
    <div class="flex-grow text-right font-bold text-3xl">
      <Clock />
    </div>
  </div>
</template>

<script>
import Clock from './Clock';

export default {
  components: {
    Clock,
  },
  props: {
    page: {
      required: true,
    },
  },
};
</script>

<style>
</style>
