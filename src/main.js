import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

import './index.css';
import router from './router';
import store from './store';

const app = createApp(App)

app.config.globalProperties.$http = axios

app.config.globalProperties.$ws = (ip) => {
  const ws = new WebSocket(ip);

  ws.onclose = (error) => {
    switch (error.code) {
      case 1000:
        console.log('WebSocket closed');
        break;
      default:
        setTimeout(() => {
          ws.close();
          return app.config.globalProperties.$ws(ip);
        }, 1000);
    }
  };

  return ws;
};

app.use(router)
app.use(store)
app.mount('#app')
