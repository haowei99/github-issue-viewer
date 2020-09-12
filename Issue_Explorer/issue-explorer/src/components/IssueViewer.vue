<template>
   <v-container>
      <v-app-bar
         app
         color="#E91E63"
         >
         <div class="d-flex align-center">
            <v-btn href="/" icon>
               <v-icon class="white--text">home</v-icon>
            </v-btn>
            <h2 class="white--text ml-2">GitHub Issue Viewer</h2>
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
      <v-row class="text-center" v-if="hasError">
         <v-col class="mb-4">
            <h1 class="display-2 font-weight-bold mb-3">
               {{this.error}}
            </h1>
         </v-col>
      </v-row>
      <v-row class="text-center" v-else-if="noResult">
         <v-col class="mb-4">
            <h1 class="display-2 font-weight-bold mb-3">
               No issues found on this repo!
            </h1>
         </v-col>
      </v-row>
   </v-container>
</template>
<script>
   import axios from "axios";
   export default {
     name: 'IssueViewer',
     props: {
       repoLink: String
     },
     data: () => ({
          info: "",
          error: "",
          hasError: false,
          noResult:false,
     }),
     beforeMount(){
       var id  = this.repoLink.replace("https://", "").replace("www.", "").replace("github.com/", "")
       axios.get('https://api.github.com/repos/' + id +"/issues")
       .then(response =>{
         if(response.data.length === 0){
           this.noResult = true
          }
          else{
            this.info = response.data
            
          }
          
           console.log(response)
         }
       )
       .catch((error) => { 
         console.log(error)
         this.hasError = true
         this.error = "Invalid Repo/Unknown error. Please go back to home page and enter a valid repo link"
       })
   
       console.log(this.repoLink)
     }
   }
</script>
<style>
   @import '../style.css' 
</style>