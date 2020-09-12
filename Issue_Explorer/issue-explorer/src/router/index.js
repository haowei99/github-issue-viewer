import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import IssueViewer from '../components/IssueViewer'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
        path: '/view/:repoLink',
        name: 'IssueViewer',
        component: IssueViewer,
        props: true
      },
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })

export default router
