import Sockets from './sockets.js'
import Vue from 'nativescript-vue';
import router from './router';
import store from './store';
import './styles.scss';

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

// Vue.use(VueNativeSock, 'ws://localhost:5000', { store: store })
Vue.use(Sockets, 'http://192.168.1.241:5000', store)

new Vue({
  router,
  store,
  created () {
    this.$socketio.on('connect', () => {
      this.$socketio.emit('list_dictionaries')
    })
  }
}).$start();
