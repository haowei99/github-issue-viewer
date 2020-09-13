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
      <v-container mt-15>
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
        <v-container fluid grid-list-sm>
          <v-layout row wrap>
            <v-flex v-for="(issue,index) in this.info" :key="index" xs4>
              <v-card elevation=4 class='card-height'>
                <v-card-title class="card-title mb-10">{{issue.title | truncate(65, '...') }}</v-card-title>
                <v-card-subtitle class="desc">
                  {{issue.body | truncate(100, '...')}} <a target="blank" :href="issue.html_url">(link)</a>
                  <br>
                <v-tooltip bottom open-delay="300" v-for= "(lab, labIndex) in issue.labels" :key="labIndex">
                <template v-slot:activator="{ on, attrs }">
                  <v-chip x-small color="#E91E63" class="chip white--text" v-bind="attrs" v-on="on">
                    {{lab.name | truncate(9, '...') }}
                  </v-chip>
                </template>
                <span>{{lab.name}}</span>
                </v-tooltip>
                </v-card-subtitle>
                
                <img v-if="issue.pull_request" class="icon" src="../assets/pull-request.svg">
                <img v-else-if="issue.state==='close'" class="icon" src="../assets/issue-closed.svg">
                
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>

      
      </v-container>


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
     },
     methods:{
     },
   }
</script>
<style>
   @import '../style.css';
   .card-title{
     color: #FFFFFF;
     background-color: #3F51b5;
     font-size:18px !important;
     height: 5em;
   }
   .card-height{
     height:15em
   }
   .chip{
     font-size:9px !important;
     margin-right: 0.5em
   }
   .desc{
    height: 7.4em;
   }
   .icon{
     width: 10px;
     height: 10px;
     margin-left: 95%;
   }
</style>