<template>
  <div>
    <Navbar page="Portable Radio" />
    <div class="flex flex-col p-6">
      <div
        :class="`w-full text-center shadow-lg rounded-lg block p-4 mb-6`"
      >
        <div
          :class="`${selecting ? 'select-active bg-gray-100' : ''} cursor-pointer text-center bg-white hover:bg-gray-100 text-gray-800 font-semibold border border-gray-400 rounded py-1 px-4 inline m-1`"
        >
          Tx
        </div>
        <div
          :class="`${active ? 'action-active bg-red-600 text-white' : 'text-gray-800'} cursor-pointer text-center bg-red-100 hover:bg-red-600 hover:text-white font-semibold border border-gray-400 rounded py-1 px-4 inline m-1`"
        >
          Emergency
        </div>
      </div>
      <div class="flex">
        <div
          :class="`w-1/2 text-center shadow-lg p-4 mt-2 mr-2 mb-2 rounded-lg inline-block relative`"
        >
          <SectionTitle title="Frequency" />
          <div class="flex justify-between w-full bg-white border text-lg border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight">
            <div class="text-3xl text-blue-600 cursor-pointer select-none">
              &#8592;
            </div>
            <div class="pt-2">
              115.9 MHz
            </div>
            <div class="text-3xl text-blue-600 cursor-pointer select-none">
              &#8594;
            </div>
          </div>
        </div>
        <div
          :class="`w-1/2 text-center shadow-lg p-4 mt-2 mr-2 mb-2 rounded-lg inline-block relative`"
        >
          <SectionTitle title="Channel" />
          <div class="relative">
            <select class="block appearance-none w-full bg-white border text-lg border-gray-300 text-gray-700 py-5 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
              <option>Police South</option>
              <option>Police North</option>
              <option>Opts 1</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Global/Navbar';
import SectionTitle from '../components/SectionTitle';

export default {
  components: {
    Navbar,
    SectionTitle,
  },
};
</script>

<style>
</style>
