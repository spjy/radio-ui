<template>
  <div>
    <Navbar page="Portable Radio" />
    <div class="flex flex-col p-6">
      <div
        :class="`flex flex-col md:flex-row justify-center w-full text-center shadow rounded-lg p-4 mb-4`"
      >
        <div
          :class="`${tx ? 'select-active bg-gray-200' : ''} cursor-pointer text-center bg-white hover:bg-gray-200 text-gray-800 font-semibold border border-gray-400 rounded p-2 mx-2 my-2 inline`"
          @click="onTx"
        >
          Transmit
        </div>
        <div
          :class="`${emergency ? 'action-active bg-red-600 text-white' : 'text-gray-800'} cursor-pointer text-center bg-red-100 hover:bg-red-600 hover:text-white font-semibold border border-gray-400 rounded p-2 mx-2 my-2 inline`"
          @click="onEmergency"
        >
          Emergency
        </div>
      </div>
      <div
        class="w-full shadow p-4 mt-2 mr-2 mb-2 rounded-lg inline-block"
      >
        <SectionTitle title="Channel" />
        <div class="relative">
          <select class="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-3 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
            <option selected disabled>Select Channel</option>
            <option v-for="channel in community.channels" :value="channel" :key="channel">{{ channel }}</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <div
        :class="`w-full shadow p-4 mt-2 mr-2 mb-2 rounded-lg inline-block relative`"
      >
        <SectionTitle title="Scanner" />
        <Enabler
          :channels="community.channels ? community.channels : []"
        />
      </div>
      <div
        :class="`w-full shadow p-4 mt-2 mr-2 mb-2 rounded-lg inline-block relative`"
      >
        <SectionTitle title="Pager" />
        <Enabler
          :channels="community.tones ? Object.keys(community.tones) : []"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Global/Navbar';
import SectionTitle from '../components/SectionTitle';
import Enabler from '../components/Enabler';

export default {
  components: {
    Navbar,
    SectionTitle,
    Enabler,
  },
  data() {
    return {
      tx: false,
      emergency: false,
    };
  },
  methods: {
    onTx() {
      this.tx = !this.tx;
    },
    onEmergency() {
      this.emergency = !this.emergency;
    },
  },
  computed: {
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
.select-active {
  animation: shadow-pulse-select 1s infinite;
}

.action-active {
  animation: shadow-pulse-action 1s infinite;
}

@keyframes shadow-pulse-select {
  0% {
    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
  }
  100% {
    box-shadow: 0 0 0 7px rgba(0, 0, 0, 0);
  }
}

@keyframes shadow-pulse-action {
  0% {
    box-shadow: 0 0 0 0px rgba(192, 18, 18, 0.5);
  }
  100% {
    box-shadow: 0 0 0 7px rgba(179, 67, 67, 0);
  }
}

/* The switch - the box around the switcher */
.switch {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 22px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The switcher */
.switcher {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.switcher:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .2s;
  transition: .2s;
}

input:checked + .switcher {
  background-color: #2196F3;
}

input:focus + .switcher {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .switcher:before {
  -webkit-transform: translateX(25px);
  -ms-transform: translateX(25px);
  transform: translateX(25px);
}

/* Rounded switchers */
.switcher.round {
  border-radius: 34px;
}

.switcher.round:before {
  border-radius: 50%;
}
</style>
