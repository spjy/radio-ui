<template>
  <div>
    <Navbar page="Dispatch Console" />
    <div class="flex p-4">
      <div class="pb-6 mr-2 flex-initial">
        <SectionTitle title="Channels" />
        <Card
          channel="Police South"
          lastTx="1103"
          :txHistory="
          [
            {
              number: '1103',
              name: 'W. Pumpernichols'
            },
            {
              number: 'D15',
              name: 'J. Juniker'
            },
            {
              number: '1112',
              name: 'C. Moyer'
            },
            {
              number: '1117',
              name: 'S. Young'
            },
          ]"
        />
        <Card
          channel="Police North"
          lastTx="5D-112"
          :txHistory="
          [
            {
              number: '5D-112',
              name: 'J. Juniker'
            },
            {
              number: '1112',
              name: 'C. Moyer'
            },
            {
              number: '1117',
              name: 'S. Young'
            },
            {
              number: '1103',
              name: 'W. Pumpernichols'
            },
          ]"
        />
        <Card
          channel="County East"
          lastTx="1801"
          :txHistory="
          [
            {
              number: '1801',
              name: 'R. Daniels'
            },
            {
              number: '1112',
              name: 'C. Moyer'
            },
            {
              number: '1117',
              name: 'S. Young'
            },
            {
              number: '1103',
              name: 'W. Pumpernichols'
            },
          ]"
        />
        <Card
          channel="City Fire"
          lastTx="F-173"
          :txHistory="
          [
            {
              number: 'F-173',
              name: 'R. Daniels'
            },
            {
              number: 'F-121',
              name: 'D. Thompson'
            },
          ]"
        />
        <Card
          channel="Highway South"
          lastTx="1103"
          :txHistory="
          [
            {
              number: '1103',
              name: 'W. Pumpernichols'
            },
            {
              number: 'D15',
              name: 'J. Juniker'
            },
            {
              number: '1112',
              name: 'C. Moyer'
            },
            {
              number: '1117',
              name: 'S. Young'
            },
          ]"
        />
        <Card
          channel="Opts 1"
          lastTx="--"
        />
      </div>
      <div class="pb-6 flex-1">
        <div class="flex flex-col">
          <!-- <SectionTitle title="Tones" />
          <div
            class="mb-3"
          >
            <div class="collapsible flex flex-wrap border rounded-lg overflow-y-hidden">
              <div class="flex-initial cursor-pointer text-center text-sm bg-gray-100 hover:bg-red-300 text-gray-800 font-semibold border border-gray-400 rounded p-2 mx-2 my-1">
                Station 1 Page
              </div>
              <div class="flex-initial cursor-pointer text-center text-sm bg-gray-100 hover:bg-red-300 text-gray-800 font-semibold border border-gray-400 rounded p-2 mx-2 my-1">
                Station 2 Page
              </div>
              <div class="flex-initial cursor-pointer text-center text-sm bg-gray-100 hover:bg-red-300 text-gray-800 font-semibold border border-gray-400 rounded p-2 mx-2 my-1">
                Emergency Traffic
              </div>
              <div class="flex-initial cursor-pointer text-center text-sm bg-gray-100 hover:bg-red-300 text-gray-800 font-semibold border border-gray-400 rounded p-2 mx-2 my-1">
                Hold Traffic
              </div>
              <div class="flex-initial cursor-pointer text-center text-sm bg-gray-100 hover:bg-red-300 text-gray-800 font-semibold border border-gray-400 rounded p-2 mx-2 my-1">
                General Run
              </div>
              <div class="expand relative bottom-0 left-0 bg-gray-100 sticky w-full text-center p-1">
                v
              </div>
            </div>
          </div> -->
          <SectionTitle title="Multiple Select" />
          <Tabs
            class="mb-3"
            :tabs="['Msel1', 'Msel2', 'Msel3']"
            selectedInitial="Msel1"
            activationType="Tx"
          >
            <template v-slot:Msel1>
              <div v-for="channel in channelsMultipleSelected['Msel1']" :key="channel">
                <TxIndicator />
                {{ channel }}
              </div>
            </template>
            <template v-slot:Msel2>
              <div v-for="channel in channelsMultipleSelected['Msel2']" :key="channel">
                <TxIndicator /> {{ channel }}
              </div>
            </template>
            <template v-slot:Msel3>
              <div v-for="channel in channelsMultipleSelected['Msel3']" :key="channel">
                <TxIndicator /> {{ channel }}
              </div>
            </template>
          </Tabs>
          <SectionTitle title="Patch" />
          <Tabs
            class="mb-3"
            :tabs="['Patch1', 'Patch2', 'Patch3']"
            selectedInitial="Patch1"
            activationType="Patch"
          >
            <template v-slot:Patch1>
              <div v-for="channel in channelsPatched['Patch1']" :key="channel">
                <TxIndicator /> {{ channel }}
              </div>
            </template>
            <template v-slot:Patch2>
              <div v-for="channel in channelsPatched['Patch2']" :key="channel">
                <TxIndicator /> {{ channel }}
              </div>
            </template>
            <template v-slot:Patch3>
              <div v-for="channel in channelsPatched['Patch3']" :key="channel">
                <TxIndicator /> {{ channel }}
              </div>
            </template>
          </Tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from '../components/Global/Navbar';
  import Card from '../components/Card';
  import Tabs from '../components/Tabs';
  import SectionTitle from '../components/SectionTitle';
  import TxIndicator from '../components/TxIndicator';

  export default {
    name: 'landing-page',
    components: {
      Navbar,
      Card,
      Tabs,
      SectionTitle,
      TxIndicator,
    },
    methods: {
      open(link) {
        this.$electron.shell.openExternal(link);
      },
    },
    computed: {
      channelsMultipleSelected() {
        return this.$store.state.multiselect.multipleSelections;
      },
      channelsPatched() {
        return this.$store.state.patch.patches;
      },
    },
  };
</script>

<style>
  .divider {
    height: 1px;
  }

  .collapsible {
    height: 50%;
    max-height: 100%;
    -webkit-transition: height 0.5s;
    transition: height 0.2s linear;
  }
  
  .collapsible:hover {
    height: 100%;
  }

  .expand {
    opacity: .95;
  }
</style>
