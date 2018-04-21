<template>
  <Page class="page">
    <ActionBar class="action-bar" :title="$route.meta.title + ' | ' + this.room">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
    </ActionBar>

    <ScrollView orientation="vertical">
      <StackLayout class="form">
        <!-- toggles - custom and mix -->
        <!-- <GridLayout class="input-field input-sides" rows="auto, auto" columns="*,*">
          <Switch checked="false" row="0" col="1" v-model="useCustom"/>
          <Label text="Custom Wordbank" class="label font-weight-bold" row="0" col="0" />
        </GridLayout> -->
        <!-- <GridLayout class="input-field input-sides" rows="auto, auto" columns="*,*">
          <Switch checked="false" row="0" col="1" v-model="mix"/>
          <Label text="Mix dictionaries" class="label font-weight-bold" row="0" col="0" />
        </GridLayout> -->
        <!-- dictionary select -->
        <StackLayout class="input-field input-sides">
          <Label text="Select a dictionary" class="label font-weight-bold text-center" row="0" col="0" />
          <ListPicker :items="dictionaries" v-model="selectedDictionary" />
        </StackLayout>

        <!-- radios - teams and board size -->
        <!-- <GridLayout class="input-field input-sides" rows="auto, auto" columns="*,*">
          <Label text="Teams" class="label font-weight-bold text-center" row="0" col="0" />
          <Label text="Board Size" class="label font-weight-bold text-center" row="0" col="1" />
          <ListPicker :items="['2 teams', '3 teams']" v-model="teams" row="1" col="0"/>
          <ListPicker :items="['Normal', 'Large']" v-model="board" row="1" col="1"/>
        </GridLayout> -->

        <!-- submit -->
        <Button class="btn btn-primary" @tap="createGame">Create Game</Button>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  export default {
    data () {
      return {
        selectedDictionary: 0,
        teams: 2,
        size: 'normal',
        useCustom: false,
        mix: false,
        wordbank: []
      };
    },
    computed: {
      ...mapState(['dictionaries', 'room'])
    },
    watch: {
      room() {
        this.set_room(this.room);
        this.$router.push({ name: 'Spymaster', params: { room: this.room } });
      },
    },
    methods: {
      ...mapMutations(['set_room']),
      createGame () {
        const params = {
          dictionaryOptions: {
            mix: this.mix,
            useCustom: this.useCustom,
            dictionaries: this.dictionaries[this.selectedDictionary],
            customWordbank: this.wordbank
          },
          teams: this.teams,
          size: this.size
        }
        this.$socketio.emit('create', params)
      }
    }
  };
</script>

<style scoped>
</style>
