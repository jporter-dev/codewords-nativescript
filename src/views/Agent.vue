<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Codewords - Agent"/>
    <StackLayout>
      <GameBoard></GameBoard>
    </StackLayout>
  </Page>
</template>

<script>
import GameBoard from '@/components/GameBoard.vue'

  export default {
    components: { GameBoard },
    data () {
      return {
        joinRoom: null,
      };
    },
  };
</script>

<style scoped>
</style>
