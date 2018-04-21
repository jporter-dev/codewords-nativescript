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
  set_game(state, game) {
    state.game = game;
  },
  set_turn(state, team) {
    state.turn = team;
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
