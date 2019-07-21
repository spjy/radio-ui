<template>
  <div>
    <div class="flex bg-gray-100 shadow-md p-3">
      <div class="text-3xl">
        Radio Solutions
      </div>
    </div>
    <div class="bg-gray-200 flex flex-col h-screen p-12 text-center justify-center">
      <div class="text-4xl">Radio Solutions</div>
      <div class="mb-6 text-gray-600">Equipping emergency services with reliable radio communications.</div>

      <div
        class="flex w-full p-4 rounded-lg mb-6"
      >
        <div class="flex-grow inline">
          <div class="relative">
            <select class="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option disabled selected value>Select profile</option>
              <option>Localhost - Dispatcher</option>
              <option>Localhost - Sheriff</option>
              <option>Lavra - Fire</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <div class="flex-initial border border-gray-300 inline py-2 px-4 bg-white rounded mx-1 submit-arrow text-blue-600 cursor-pointer hover:bg-gray-300">➜</div>
      </div>
      
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
  </div>
</template>

<script>
import Navbar from '../components/Global/Navbar';

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
.submit-arrow:hover {

}
</style>
