import Vue from 'nativescript-vue';
import Vuex from 'vuex';

import gameboard from './modules/gameboard';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    gameboard,
  },
  strict: debug,
  state: {
    connected: false,
    dictionaries: [],
    room: '',
    username: '',
    error: '',
    turn: '',
    spymasterReveal: false,
    popupHides: 0
  },
  mutations: {
    SOCKET_CONNECT(state) {
      state.connected = true;
    },
    SOCKET_DISCONNECT(state) {
      state.connected = false;
    },
    SOCKET_ERROR(state, message) {
      state.error = message.error;
    },
    SOCKET_JOIN_ROOM(state, message) {
      state.error = null;
      state.room = message.room;
    },
    SOCKET_LIST_DICTIONARIES: (state, message) => {
      state.dictionaries = message.dictionaries;
    },
    SOCKET_MESSAGE (state, message) {
      state.gameboard.game = message
      state.gameboard.turn = message.starting_color
      state.room = message.game_id
      state.error = null
    },
    set_room(state, room) {
      state.room = room;
    },
    set_username(state, username) {
      state.username = username;
    },
    reset_error(state) {
      state.room = '';
      state.error = '';
    },
    reveal_spymaster(state) {
      state.spymasterReveal = true;
    },
    incrementPopupHides(state) {
      state.popupHides++
    },
  }
});

Vue.prototype.$store = store;

module.exports = store;
