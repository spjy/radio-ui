<template>
  <div>
    <Navbar page="Settings" />
    <div class="flex flex-col p-4">
      <div>
        <SectionTitle title="Main Hotkeys" />
        <div class="flex flex-wrap">
          <HotkeySelect
            class="md:w-1/2 p-2"
            type="main"
            name="Toggle Multiple Select Selection"
          />
          <HotkeySelect
            class="md:w-1/2 p-2"
            type="main"
            name="Toggle Multiple Select Tx"
          />
          <HotkeySelect
            class="md:w-1/2 p-2"
            type="main"
            name="Toggle Patch Selection"
          />
          <HotkeySelect
            class="md:w-1/2 p-2"
            type="main"
            name="Toggle Patch"
          />
        </div>
      </div>
      <SectionTitle title="Channel Hotkeys" />
      <div class="flex flex-wrap">
        <HotkeySelect
          v-for="channel in community.channels"
          class="md:w-1/2 p-2"
          type="channel"
          :name="channel"
          :key="channel"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from '../components/Global/Navbar';
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
      community() {
        if (this.$store.state.session) {
          return this.$store.state.session.community;
        }
        return null;
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
