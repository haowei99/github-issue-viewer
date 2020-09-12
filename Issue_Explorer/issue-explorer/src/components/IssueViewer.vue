<template>
  <v-container>

    <v-app-bar
      app
      color="#E91E63"
    >
      <div class="d-flex align-center">
        
      </div>

      <v-spacer></v-spacer>

      <a
        href="https://github.com/facebook/react"
        text
        class="link"
      >
        <span class="mr-2">https://github.com/facebook/react</span>
      </a>

    </v-app-bar>

    <v-row class="text-center">
      

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify {{repoId}}!
        </h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'IssueViewer',
    props: {
      repoId: String
    },
    mounted(){
      console.log(this.repoId)
    }
  }
</script>

<style>
  @import '../style.css' 
</style>
