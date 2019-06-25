<template>
  <div class="bg-gray-200 flex flex-col h-screen content-center text-center p-4">
    <router-link
      to="/dispatch"
      :class="`${selecting ? 'bg-gray-100' : ''} cursor-pointer text-center bg-white hover:bg-gray-100 text-gray-800 font-semibold p-1 m-2 border border-gray-400 rounded `"
    >
      Dispatch Console
    </router-link>
    <router-link
      to="/portable"
      :class="`${selecting ? 'bg-gray-100' : ''} cursor-pointer text-center bg-white hover:bg-gray-100 text-gray-800 font-semibold p-1 m-2 border border-gray-400 rounded `"
    >
      Portable Radio
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
