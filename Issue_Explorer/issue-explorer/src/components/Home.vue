<template>
   <div class="home">
      <div class="container pad">
         <b>
            <h1 class="white--text display-4"  data-aos="fade-up" data-aos-duration="1200">
               GitHub Issue Viewer
            </h1>
         </b>
      </div>
      <v-toolbar class="search mt-4 mb-4"  data-aos="fade-up" data-aos-duration="1700">
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
       width:50%;
       margin-left: 26%;
   }
</style>