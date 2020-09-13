<template>
   <v-container>
      <v-app-bar
         app
         color="#E91E63"
         pb-10
         >
         <div class="d-flex align-center">
            <v-btn href="/" icon>
               <v-icon class="white--text">home</v-icon>
            </v-btn>
            <h2 class="white--text ml-2 d-none d-sm-block">GitHub Issue Viewer</h2>
            <h4 class="white--text ml-2 pt-1 d-block d-sm-none">GitHub Issue Viewer</h4>
         </div>
         <v-spacer></v-spacer>
         <a
            href="https://github.com/facebook/react"
            text
            class="link d-none d-sm-block"
            >
         <span class="mr-2">https://github.com/facebook/react</span>
         </a>
      </v-app-bar>
      <v-container fluid grid-list-sm class="content">
         <v-layout row wrap>
            <v-flex class="text-center" v-if="hasError" md12>
                  <h1 class="display-2 font-weight-bold mb-3" data-aos="fade" data-aos-duration="1200">
                     {{this.error}}
                  </h1>
            </v-flex>
            <v-flex class="text-center" v-else-if="noResult" md12 data-aos="fade" data-aos-duration="1200">
                  <h1 class="display-2 font-weight-bold mb-3">
                     No issues found on this repo!
                  </h1>
            </v-flex>
            <v-flex md12 v-if="this.info" data-aos="fade" data-aos-duration="1200">
              <v-btn class="btn"  @click="setFilter('all')" v-bind:class="{ active_color: this.filter==='all'}">All Issues</v-btn>
              <v-btn class="btn" @click="setFilter('open')" v-bind:class="{ active_color: this.filter==='open'}">Open Issues</v-btn>
              <v-btn class="btn" @click="setFilter('closed')" v-bind:class="{ active_color: this.filter==='closed'}">Closed Issues</v-btn>
              <v-btn class="btn" @click="setFilter('pr')" v-bind:class="{ active_color: this.filter==='pr'}">Pull Requests</v-btn>
            </v-flex>
            <v-flex v-for="(issue,index) in getFilterList" :key="index"  xs12 md6 lg4 pa-4 data-aos="zoom-in" data-aos-duration="800">
               <v-card elevation=4 class='card-height'>
                  <v-card-title class="card-title mb-10"><b>{{issue.title | truncate(50, '...') }}</b></v-card-title>
                  <v-card-subtitle class="desc">
                     <div class="desc-height">{{issue.body | truncate(100, '...')}} <a target="blank" :href="issue.html_url">(link)</a></div>
                     
                     <v-tooltip bottom open-delay="300" v-for= "(lab, labIndex) in issue.labels" :key="labIndex">
                        <template v-slot:activator="{ on, attrs }">
                           <v-chip x-small color="#E91E63" class="chip white--text" v-bind="attrs" v-on="on">
                              {{lab.name | truncate(9, '...') }}
                           </v-chip>
                        </template>
                        <span>{{lab.name}}</span>
                     </v-tooltip>
                  </v-card-subtitle>
                  <!-- Closed Status is precedant. Only display pr icon when it is an open pr -->
                  <img v-if="issue.state==='closed'" class="icon" src="../assets/issue-closed.svg">
                  <img v-else-if="issue.pull_request" class="icon" src="../assets/pull-request.svg">
               </v-card>
            </v-flex>
         </v-layout>
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
          filter: 'all',
     }),
     computed:{
       getFilterList(){
         
         if (this.filter === 'open'){
           return this.info.filter((issue) => {
             return issue.state === 'open'
           })
         }
         else if (this.filter === 'closed'){
           return this.info.filter((issue) => {
             return issue.state === 'closed'
           })
         }
         else if (this.filter === 'pr'){
           return this.info.filter((issue) => {
             return issue.pull_request && issue.state === 'open'
           })
         }
         else{
           //all
           return this.info
         }
         
       }
     },
     beforeMount(){
       var id  = this.repoLink.replace("https://", "").replace("www.", "").replace("github.com/", "")
       if (id[id.length - 1] === "/"){
         //take care of case when / is at the end of URL
         id = id.substring(0, id.length-1)
       }
       axios.get('https://api.github.com/repos/' + id +"/issues?state=all")
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
       setFilter(filterName) {
            this.filter = filterName
        }
     },
   }
</script>
<style>
   @import '../style.css';

   @media (max-width: 479px) {
      .content{
      padding-top: 20%;
      }
    }
    @media (min-width: 500px) {
      .content{
      padding-top: 10%;
      }
    }
    @media (min-width: 1250px) {
      .content{
      padding-top: 7%;
      }
    }

   .btn{
      margin-right: 1em;
      margin-bottom:1em;
   }
   .active_color{
     color: #E91E63 !important;
   }
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
   .desc-height{
     height: 6.8em
   }
   .icon{
   width: 15px;
   height: 15px;
   margin-left: 95%;
   }
</style>