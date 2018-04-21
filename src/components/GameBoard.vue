<template>
  <ScrollView orientation="vertical">
    <FlexboxLayout class="game-grid p-5">
      <Label
        v-for="word in words"
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
  import { mapActions } from 'vuex';

  export default {
    data () {
      return {
        flipped: {},
        // dummy list of words
        words: [
          'toothbrush','mess','cow','sleep','plumber','zoo','population','plate','jade','hug','gray','cream','deep','houseboat','smith','jelly','goblin','ovation','boa','flower','monster','playground','outside','conversation','pilot',
        ],
      }
    },
    methods: {
      getClass (word) {
        // if tile flipped is blue
        if (this.flipped[word]) {
          return 'blue-tile'
        }
        // default tile color
        return 'neutral-tile'
      },
      flipCard (card) {
        // flip the card
        this.$set(this.flipped, card, !this.flipped[card])
      }
    }
  };
</script>

<style scoped>
  .game-grid {
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .game-tile {
    flex-shrink: 0;
    flex-grow: 1;
    background-color: #cccccc;
    font-size: 22px;
  }

  .game-tile.blue-tile {
    background-color: #1976d2;
    color: white;
  }
  .game-tile.red-tile {
    background-color: #c62828;
    color: white;
  }
  .game-tile.neutral-tile {
    background-color: #ececec;
  }
</style>
