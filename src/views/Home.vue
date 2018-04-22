<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Codewords"></ActionBar>

    <StackLayout class="form text-center">
      <Image src="~/images/logo-256x256.png" stretch="aspectFill" horizontalAlignment="center" width="150" height="150" />
      <Button class="btn btn-secondary" @tap="$router.push('/create')">Create Game</Button>
      <TextField class="input input-border m-r-20 m-l-20" v-model="roomID" hint="Enter a room ID" maxLength="5"  returnKeyType="go" autocorrect="false" @returnPress="joinRoom" />
      <Button class="btn btn-primary" @tap="joinRoom">Join Game</Button>
      <Label :text="'Websocket status: ' + ((connected) ? 'connected' : 'disconnected')" />
    </StackLayout>

  </Page>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    data () {
      return {
        roomID: null,
      };
    },
    computed: {
      ...mapState(['connected'])
    },
    methods: {
      joinRoom () {
        if (this.roomID) {
          this.$router.push({ name: 'Agent', params: { room: this.roomID.toUpperCase() } });
        }
      }
    }
  };
</script>

<style scoped>
  Button.btn-secondary {
    background-color: #303030;
    color: #eeeeee;
  }
  /* TextField.input.input-border { background: white; } */
</style>
