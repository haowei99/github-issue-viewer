<template>
   <div class="home">
      <div class="container pad">
         <b>
            <h1 class="white--text display-4 d-none d-sm-block" data-aos="fade-up" data-aos-duration="1200">
               GitHub Issue Viewer
            </h1>
            <h1 class="white--text ml-2 pt-1 d-block d-sm-none" data-aos="fade-up" data-aos-duration="1200">GitHub Issue Viewer</h1>
         </b>
      </div>
      <v-toolbar class="search mt-4 mb-4"  data-aos="fade-up" data-aos-duration="1700">
            <v-text-field
               v-model="repoLink"
               hide-details
               placeholder="Link to a Github repo"
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
            this.$router.push({ name: 'IssueViewer', params: {repoLink: this.repoLink }})
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
   }
   .pad{
      padding-top:20%
   }
   .search{
       width:70%;
       margin-left: 16%;
   }
</style>