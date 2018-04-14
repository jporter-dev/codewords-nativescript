<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Codewords"/>

    <StackLayout class="form text-center">
      <Image src="~/images/logo-256x256.png" stretch="none" horizontalAlignment="center"/>
      <Button class="btn btn-secondary" @tap="$router.push('/create')">Create Game</Button>
      <TextField class="input input-border m-r-16 m-l-16" v-model="joinRoom" hint="Enter a room ID" maxLength="5" />
      <Button class="btn btn-primary" @tap="$router.push('/create')">Join Game</Button>
    </StackLayout>

  </Page>
</template>

<script>
  export default {
    data () {
      return {
        joinRoom: null,
      };
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
