<template>
  <ScrollView orientation="vertical">
    <FlexboxLayout class="game-grid p-5">
      <Label
        v-for="word in words"
        :key="word"
        :text="word"
        class="game-tile text-center m-5 p-x-15 p-y-20" />
    </FlexboxLayout>
  </ScrollView>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    data () {
      return {
        words: [
          'toothbrush','mess','cow','sleep','plumber','zoo','population','plate','jade','hug','gray','cream','deep','houseboat','smith','jelly','goblin','ovation','boa','flower','monster','playground','outside','conversation','pilot',
        ]
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
    background-color: #43b883;
  }
</style>
