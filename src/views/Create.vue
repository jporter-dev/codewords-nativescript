<template>
  <Page class="page">
    <ActionBar class="action-bar" :title="$route.meta.title">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
    </ActionBar>

    <ScrollView orientation="vertical">
      <StackLayout class="form">
        <!-- toggles - custom and mix -->
        <GridLayout class="input-field input-sides" rows="auto, auto" columns="*,*">
          <Switch checked="false" row="0" col="1"/>
          <Label text="Custom Wordbank" class="label font-weight-bold" row="0" col="0" />
        </GridLayout>
        <GridLayout class="input-field input-sides" rows="auto, auto" columns="*,*">
          <Switch checked="false" row="0" col="1"/>
          <Label text="Mix dictionaries" class="label font-weight-bold" row="0" col="0" />
        </GridLayout>
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
        <Button class="btn btn-primary" @tap="$router.push('/agent')">Create Game</Button>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        selectedDictionary: '',
        teams: 2,
        board: 'normal'
      };
    },
    computed: {
      ...mapState(['dictionaries'])
    }
  };
</script>

<style scoped>
</style>
