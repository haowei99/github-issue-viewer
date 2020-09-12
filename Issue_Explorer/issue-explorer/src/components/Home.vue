<template>
   <div class="home">
      <div class="container">
         <b>
            <h1 class="white--text display-4">
               GitHub Issue Viewer
            </h1>
         </b>
      </div>
      <v-toolbar class="search">
            <v-text-field
               v-model="repoLink"
               hide-details
               placeholder="Paste a link to a GitHub repo!"
               prepend-icon="search"
               single-line
               @keydown.enter="goToIssueViewer()"
               ></v-text-field>
        </v-toolbar>
   </div>
</template>
<script>
   export default {
     name: 'Home',
     data: () => ({
         repoLink: "",
    }),
    methods: {
        goToIssueViewer(){
             this.$router.push('/view/' + this.repoLink)
        }
    }
}
</script>
<style>
   @import '../style.css'; 
   .container{
   display: flex;
   justify-content: center;
   align-items: center;
   padding-top: 20%;
   }
   .search{
       width:50%;
       margin-left: 26%;
   }
</style>