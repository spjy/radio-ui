<template>
  <div>
    <Navbar page="Settings" />
    <div class="flex flex-col p-4">
      <div>
        <SectionTitle title="Main Hotkeys" />
        <div class="flex flex-wrap">
          <HotkeySelect class="md:w-1/2 p-2" type="Toggle Multiple Select Selection" />
          <HotkeySelect class="md:w-1/2 p-2" type="Toggle Patch Selection" />
          <HotkeySelect class="md:w-1/2 p-2" type="Toggle Multiple Select Selection" />
          <HotkeySelect class="md:w-1/2 p-2" type="Toggle Patch Selection" />
          <HotkeySelect class="md:w-1/2 p-2" type="Toggle Multiple Select Selection" />
          <HotkeySelect class="md:w-1/2 p-2" type="Toggle Patch Selection" />
        </div>
      </div>
      <SectionTitle title="Channel Hotkeys" />
      <div class="flex flex-wrap">
        <HotkeySelect class="md:w-1/2 p-2" type="Police North Tx" />
        <HotkeySelect class="md:w-1/2 p-2" type="Police South Tx" />
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from '../components/Global/Navbar';
  import Card from '../components/Card';
  import Tabs from '../components/Tabs';
  import SectionTitle from '../components/SectionTitle';
  import HotkeySelect from '../components/HotkeySelect';

  export default {
    name: 'landing-page',
    data() {
      return {
        mainTx: [],
      };
    },
    components: {
      Navbar,
      Card,
      Tabs,
      SectionTitle,
      HotkeySelect,
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
