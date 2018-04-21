require('nativescript-websockets');
import VueNativeSock from 'vue-native-websocket'
import Vue from 'nativescript-vue';
import router from './router';
import store from './store';
import './styles.scss';

// Uncommment the following to see NativeScript-Vue output logs
Vue.config.silent = false;

Vue.use(VueNativeSock, 'ws://localhost:5000', { store: store })

new Vue({
  router,
  store,
}).$start();
