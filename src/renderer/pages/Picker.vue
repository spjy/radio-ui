<template>
  <div class="bg-gray-200 flex flex-col h-screen p-12 text-center justify-center">
    <div class="text-4xl">Bandwidth Technologies</div>
    <div class="mb-6 text-gray-600">Equipping emergency services with reliable radio communications.</div>
    
    <div class="flex text-center justify-center mb-4">
      <router-link
        to="/dispatch"
        class="inline cursor-pointer text-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full mr-4"
      >
        Dispatch Console
      </router-link>
      <router-link
        to="/portable"
        class="inline cursor-pointer text-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full mr-4"
      >
        Portable Radio
      </router-link>
      <router-link
        to="/settings"
        class="inline cursor-pointer text-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full"
      >
        Settings
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
