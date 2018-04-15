<template>
  <Page class="page">
    <ActionBar class="action-bar" :title="$route.meta.title">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
    </ActionBar>
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
