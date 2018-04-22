<template>
  <ScrollView orientation="vertical">
    <StackLayout>
      <Label :text="Object.keys(gameboard.game.board).join(',')" />
    </StackLayout>
    <FlexboxLayout class="game-grid p-5">
      <Label
        v-for="(team,word) in words"
        :key="word"
        :text="word"
        @tap="flipCard(word)"
        class="game-tile text-center m-5 p-x-15 p-y-20"
        :class="getClass(word)"
      />
    </FlexboxLayout>
  </ScrollView>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    props: ['isSpymaster'],
    data () {
      return {
        flipped: {},
      }
    },
    computed: {
      ...mapState(['gameboard', 'room']),
      words () {
        return this.gameboard.game.board
      },
      solution () {
        return this.gameboard.game.solution
      }
    },
    methods: {
      getClass (word) {
        let className = ''
        if (this.isSpymaster || this.words[word]) { // TODO check for spymaster prop
          className = this.solution[word].toLowerCase() + '-tile'
          if (this.isSpymaster && this.words[word]) { className = 'inverse-' + className }
        }
        return className
      },
      flipCard (card) {
        // check if player is a spymaster
        if (this.isSpymaster) {
          // confirm that they want to flip
          confirm(`Flip "${card.trim()}" card?`)
          .then(result => {
            // flip the card
            if (result) {
              this.$set(this.flipped, card, !this.flipped[card])
              const params = {
                card: card,
                room: this.room,
              };
              this.$socketio.emit('flip_card', params);
            }
          })
        } else {
          alert('Only spymasters can flip cards.')
        }
      }
    }
  }
</script>

<style scoped>
  .game-grid {
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .game-tile {
    flex-shrink: 0;
    flex-grow: 1;
    background-color: #424242;
    color: #eeeeee;
    font-size: 22px;
  }

  .game-tile.b-tile {
    background-color: #1976d2;
    color: white;
  }
  .game-tile.r-tile {
    background-color: #c62828;
    color: white;
  }
  .game-tile.o-tile {
    background-color: #ececec;
    color: #424242;
  }
  .game-tile.x-tile {
    background-color: #212121;
    color: white;
  }

  .game-tile.inverse-b-tile {
    color: #1976d2;
    background-color: #424242;
  }
  .game-tile.inverse-r-tile {
    color: #c62828;
    background-color: #424242;
  }
  .game-tile.inverse-o-tile {
    color: #ececec;
    background-color: #424242;
  }
  .game-tile.inverse-x-tile {
    color: #212121;
    background-color: #424242;
  }
</style>
