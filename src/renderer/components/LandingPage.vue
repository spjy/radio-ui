<template>
  <div class="">
    <div class="flex bg-gray-100 shadow-md p-3 justify-between">
      <div class="flex-initial">
        <div class="font text-3xl">
          Radio Console
        </div>
      </div>
      <div class="flex-grow text-right font-bold text-3xl">
        <Clock />
      </div>
    </div>
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
          :selected="true"
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
          :selected="true"
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
        <SectionTitle title="Tones" />
        <div class="flex flex-col">
          <div
            class="mb-3"
          >
            <div class="flex flex-wrap border rounded-lg p-4">
              <div class="flex-initial cursor-pointer text-center bg-gray-100 hover:bg-red-300 text-gray-800 font-semibold border border-gray-400 rounded p-2 mr-1 mb-1">
                Station 1 Page
              </div>
              <div class="flex-initial cursor-pointer text-center bg-gray-100 hover:bg-red-300 text-gray-800 font-semibold border border-gray-400 rounded p-2 mr-1 mb-1">
                Station 2 Page
              </div>
              <div class="flex-initial cursor-pointer text-center bg-gray-100 hover:bg-red-300 text-gray-800 font-semibold border border-gray-400 rounded p-2 mr-1 mb-1">
                Emergency Traffic
              </div>
              <div class="flex-initial cursor-pointer text-center bg-gray-100 hover:bg-red-300 text-gray-800 font-semibold border border-gray-400 rounded p-2 mr-1">
                Hold Traffic
              </div>
              <div class="flex-initial cursor-pointer text-center bg-gray-100 hover:bg-red-300 text-gray-800 font-semibold border border-gray-400 rounded p-2">
                General Run
              </div>
            </div>
          </div>
          <SectionTitle title="Multiple Select" />
          <Tabs
            class="mb-3"
            :tabs="['Msel1', 'Msel2', 'Msel3']"
            selectedInitial="Msel1"
            activationType="Tx"
          >
            <template v-slot:Msel1>
              <div class="divider bg-gray-400 my-2 rounded"></div>
              <div class="">
                Police North
              </div>
              <div class="divider bg-gray-400 my-2 rounded"></div>
              <div>
                County East
              </div>
            </template>
            <template v-slot:Msel2>
              Hi
            </template>
            <template v-slot:Msel3>
              Bye
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
              <div class="divider bg-gray-400 my-2 rounded"></div>
              <div class="">
                Police North
              </div>
              <div class="divider bg-gray-400 my-2 rounded"></div>
              <div>
                County East
              </div>
            </template>
            <template v-slot:Patch2>
              Hi
            </template>
            <template v-slot:Patch3>
              Bye
            </template>
          </Tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation';
  import Clock from './Clock';
  import Card from './Card';
  import Tabs from './Tabs';
  import SectionTitle from './SectionTitle';

  export default {
    name: 'landing-page',
    components: {
      SystemInformation,
      Clock,
      Card,
      Tabs,
      SectionTitle,
    },
    methods: {
      open(link) {
        this.$electron.shell.openExternal(link);
      },
    },
  };
</script>

<style>
  .divider {
    height: 1px;
  }
</style>
