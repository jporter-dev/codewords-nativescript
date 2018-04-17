const state = {
  game: {
    game_id: '',
    starting_color: '',
    players: [],
    date_created: '',
    date_modified: '',
    board: {},
    solution: {},
  }
};

const mutations = {
  SOCKET_MESSAGE (state, message) {
    state.game = Object.assign(state.game, message)
    state.turn = message.starting_color;
    state.room = message.game_id;
    state.error = null;
  },
};

const getters = {
  words (state) {
    if (state.game.solution) {
      return Object.keys(state.game.solution);
    }
    return [];
  },
};

export default {
  state,
  mutations,
  getters,
};
