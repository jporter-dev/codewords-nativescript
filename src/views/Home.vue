<template>
  <Page class="page">
    <ActionBar class="action-bar" :title="$route.meta.title">
        <ActionItem
          ios.systemIcon="9" ios.position="left"
          android.systemIcon="ic_menu_share" android.position="actionBar" />
    </ActionBar>

    <StackLayout class="form text-center">
      <Image src="~/images/logo-256x256.png" stretch="aspectFill" horizontalAlignment="center" width="150" height="150" />
      <Button class="btn btn-secondary" @tap="$router.push('/create')">Create Game</Button>
      <TextField class="input input-border m-r-20 m-l-20" v-model="joinRoom" hint="Enter a room ID" maxLength="5" />
      <Button class="btn btn-primary" @tap="$router.push('/agent')">Join Game</Button>
      <Label :text="connected" />
    </StackLayout>

  </Page>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        joinRoom: null,
      };
    },
    computed: {
      ...mapState(['connected'])
    },
  };
</script>

<style scoped>
  Button.btn-secondary {
    background-color: #303030;
    color: #eeeeee;
  }
  /* TextField.input.input-border { background: white; } */
</style>
