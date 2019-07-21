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
          <select
            class="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-3 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            @change="onSelectChannel"
          >
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
        <Scanner
          :channels="community.channels ? community.channels : []"
        />
      </div>
      <div
        :class="`w-full shadow p-4 mt-2 mr-2 mb-2 rounded-lg inline-block relative`"
      >
        <Pager
          :tones="community.tones ? Object.keys(community.tones) : []"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SimplePeer from 'simple-peer';

import Navbar from '../components/Global/Navbar';
import SectionTitle from '../components/SectionTitle';
import Enabler from '../components/Enabler';
import Scanner from '../components/Portable/Scanner';
import Pager from '../components/Portable/Pager';

export default {
  components: {
    Navbar,
    SectionTitle,
    Enabler,
    Scanner,
    Pager,
  },
  data() {
    return {
      userId: Math.random(),
      ws: this.$ws('ws://localhost:8081'),
      emergency: false,
      initiators: {},
      receivers: {},
      initiatorSdps: [],
      receiverSdps: [],
      channel: null,
    };
  },
  methods: {
    onTx() {
      this.$store.dispatch('portable/setTx', !this.tx);
    },
    onEmergency() {
      this.emergency = !this.emergency;
    },
    onSelectChannel(event) {
      this.channel = event.target.value;
    },
    initiator() {
      const initiator = new SimplePeer({ initiator: true, trickle: false });

      initiator.on('error', err => console.log('error', err));

      initiator.on('signal', (data) => {
        console.log(`SIGNAL, ${data}`);
        // Get SDP from initial construction
        if (!this.initiatorSdps.includes(data.sdp) && data.type === 'offer') {
          // save
          this.initiatorSdps.push(data.sdp);
          // Send offer to other clients over socket
          this.ws.send(JSON.stringify({
            type: 'connection',
            payload: {
              id: this.userId,
              connection: data,
            },
          }));
        }
      });

      // Function run upon successfully connecting to peer
      initiator.on('connect', () => {
        console.log('CONNECT');
        setInterval(() => {
          console.log('sent from initiator');
          initiator.send(`sent from initiator ${initiator._id}`);
        }, 3000);
      });

      // Function run upon receiving data from peer
      initiator.on('data', (data) => {
        console.log(data);
      });

      // Function run upon closing connection with peer
      initiator.on('close', () => {
        console.log('initiator disconnected');
        initiator.destroy();
        delete this.initiators[initiator._id];
      });

      return initiator;
    },
    receiver({ id, connection }) {
      const receiver = new SimplePeer({ initiator: false, trickle: false });

      receiver.signal(connection);

      receiver.on('error', err => console.log('error', err));

      receiver.on('signal', (data) => {
        if (!this.receiverSdps.includes(data.sdp) && data.type === 'answer') {
          console.log(`RECEIVER SIG, ${data}`);
          this.receiverSdps.push(data.sdp);

          this.ws.send(JSON.stringify({
            type: 'connection',
            payload: {
              id,
              connection: data,
            },
          }));
        }
      });

      receiver.on('connect', () => {
        console.log('CONNECT');
        setInterval(() => {
          console.log('sent from receiver');
          receiver.send(`send from receive ${receiver._id}`);
        }, 3000);
      });

      receiver.on('data', (data) => {
        console.log(`data: ${data}`);
      });

      receiver.on('close', () => {
        console.log('receiver disconnected');
        receiver.destroy();
        delete this.receivers[receiver._id];
      });

      return receiver;
    },
  },
  computed: {
    community() {
      if (this.$store.state.session) {
        return this.$store.state.session.community;
      }
      return null;
    },
    tx() {
      return this.$store.state.portable.tx;
    },
    scanningChannels() {
      return this.$store.state.portable.scanningChannels;
    },
    pagingChannels() {
      return this.$store.state.portable.pagingChannels;
    },
  },
  created() {
    this.ws.onopen = () => {
      this.ws.send(JSON.stringify({
        type: 'clientCount',
      }));

      this.ws.onmessage = ({ data }) => {
        try {
          const { type, payload } = JSON.parse(data);

          switch (type) {
            case 'community': {
              console.log(payload);
              this.$store.dispatch('setSessionCommunity', payload);
              console.log(this.$store.state.session);
              break;
            }
            case 'connection': {
              // Accept offer and make answer
              switch (payload.connection.type) {
                // Initiating a connection between self and another client
                case 'offer': {
                  if (!this.initiatorSdps.includes(payload.connection.sdp)
                    && !Object.keys(this.receivers).includes(payload.id)) {
                    // Create a receiver instance to connect to offer
                    const receiverInstance = this.receiver(payload);
                    this.receivers[payload.id] = receiverInstance;
                  }
                  break;
                }
                case 'answer':
                  if (!this.receiverSdps.includes(payload.connection.sdp)
                    && payload.id === this.userId) {
                    // Find an initiator that has not been used yet and complete the connection
                    Object.keys(this.initiators).some((initiator) => {
                      if (!this.initiators[initiator].answered) {
                        this.initiators[initiator].instance.signal(payload.connection);
                        this.initiators[initiator].answered = true;
                        return true;
                      }
                      return false;
                    });
                    // eslint-disable-next-line
                    // for (initiator in this.initiators) {
                    //   if (!this.initiators[initiator].answered) {
                    //     this.initiators[initiator].instance.signal(payload.connection);
                    //     this.initiators[initiator].answered = true;
                    //     break;
                    //   }
                    // }
                  }
                  break;
                default:
                  break;
              }
              break;
            }
            case 'clientCount': {
              for (let i = 0; i < payload - 1; i += 1) {
                const instance = this.initiator();

                this.initiators[instance._id] = {
                  instance,
                  answered: false,
                };
              }
              break;
            }
            default:
              break;
          }
        } catch (error) {
          console.log(error);
        }
      };
    };
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
