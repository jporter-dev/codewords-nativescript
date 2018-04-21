const SocketIO = require('nativescript-socket.io');

export default {
  install (Vue, connection, store) {
    if (connection) {
      const socketio = SocketIO.connect('http://0.0.0.0:5000');
      // allow access to socketio by this.$socketio
      Vue.prototype.$socketio = socketio;

      if (store) {
        // initialize listeners for the SOCKET_* mutations
        const socket_events = Object.keys(store._mutations).filter(key => { return key.includes('SOCKET_') });
        socket_events.forEach(mutation => {
          const socket_evt = mutation.replace('SOCKET_', '').toLowerCase();
          socketio.on(socket_evt, (data) => {
            store.commit(mutation, data);
          });
        });
      }
    } else {
      console.error('Unable to connect to websocket.');
    }
  }
}
