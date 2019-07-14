import Vue from 'vue';
import axios from 'axios';

import App from './App';
import router from './router';
import store from './store';
import '../renderer/assets/tailwind.css';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

Vue.prototype.$ws = (ip) => {
  const ws = new WebSocket(ip);
  let lastMessage;

  ws.onopen = () => {

  };

  ws.onclose = (error) => {
    switch (error.code) {
      case 1000:
        console.log('WebSocket closed');
        break;
      default:
        setTimeout(() => {
          ws.close();
          return Vue.prototype.$ws(ip);
        }, 1000);
    }
  };

  ws.onmessage = (data) => {
    let json;

    try {
      json = JSON.parse(data);
    } catch (error) {
      //
    }

    if (json) {
      lastMessage = json;
    }
  };

  const send = (message) => {
    ws.send(message);
  };

  return [lastMessage, send];
};

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>',
}).$mount('#app');
