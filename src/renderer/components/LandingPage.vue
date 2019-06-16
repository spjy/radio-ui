<template>
  <div>
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
      <div class="pb-6 mr-2 w-3/4">
        <SectionTitle title="Channels" />
        <Card
          channel="Police South"
          lastTx="Lt. Baker"
          :txHistory="
          [
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
            {
              number: '1103',
              name: 'W. Pumpernichols'
            },
          ]"
        />
        <Card
          channel="Police North"
          lastTx="Sgt. Juniker"
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
          lastTx="Dep. Young"
          :selected="true"
          :txHistory="
          [
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
            {
              number: '1103',
              name: 'W. Pumpernichols'
            },
          ]"
        />
        <Card
          channel="Highway South"
          lastTx="Tpr. Daniels"
          :txHistory="
          [
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
            {
              number: '1103',
              name: 'W. Pumpernichols'
            },
          ]"
        />
        <Card
          channel="Opts 1"
          lastTx="--"
        />
      </div>
      <div class="pb-6">
        <SectionTitle title="Tools" />
        <Tabs
          :tabs="['Msel1', 'Msel2', 'Msel3']"
          selectedInitial="Msel1"
        >
          <template v-slot:Msel1>
            dsfdf
          </template>
          <template v-slot:Msel2>
            Hi
          </template>
          <template v-slot:Msel3>
            Bye
          </template>
        </Tabs>
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
</style>
