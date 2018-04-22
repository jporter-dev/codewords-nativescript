<template>
  <Page class="page">
    <ActionBar class="action-bar" :title="$route.params.room">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
    </ActionBar>
    <GameBoard></GameBoard>
  </Page>
</template>

<script>
  import GameBoard from '@/components/GameBoard.vue'
  import {mapMutations, mapState} from 'vuex'
  export default {
    components: { GameBoard },
    methods: {
      ...mapMutations(['set_room'])
    },
    computed: {
      ...mapState(['room'])
    },
    mounted () {
      if (!this.room) this.set_room(this.$route.params.room.toUpperCase());
      const params = {
        room: this.room,
      };
      this.$socketio.emit('join', params);
    }
  };
</script>

<style scoped>
</style>
