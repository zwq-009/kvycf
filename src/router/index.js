import Vue from 'vue'
import VueRouter from 'vue-router'

//#region 进入页面，包括登录和注册功能
import EnterPage from '../views/EnterPage'

import EnterMainPage from '../components/Enter/MainPage'
import EnterSignUpPage from '../components/Enter/SignUpPage'

import EnterServicePage from '../components/Enter/Service/ServicePage'
import EnterServicePageR2 from '../components/Enter/Service/ServicePageR2'

import EnterCompanyPage from '../components/Enter/Company/CompanyPage'
import EnterCompanyPageR2 from '../components/Enter/Company/CompanyPageR2'
import EnterCompanyPageR3 from '../components/Enter/Company/CompanyPageR3'

import EnterJoinUsPage from '../components/Enter/JoinUs/JoinUsPage'
import EnterJoinUsPageR2 from '../components/Enter/JoinUs/JoinUsPageR2'
//#endregion

Vue.use(VueRouter)

const routes = [
  //#region EnterPage路由
  {
    path: '/',
    name: 'EnterPage',
    component: EnterPage,
    children: [
      //进入时主业
      {
        path: '/',
        name: 'EnterMainPage',
        component: EnterMainPage
      },
      //进入时登录页面
      {
        path: '/EnterSignUpPage',
        name: 'EnterSignUpPage',
        component: EnterSignUpPage,
        children: [
          //#region 客户注册页面
          {
            path: '/EnterSignUpPage/EnterServicePage',
            name: 'EnterServicePage',
            component: EnterServicePage
          },
          {
            path: '/EnterSignUpPage/EnterServicePageR2',
            name: 'EnterServicePageR2',
            component: EnterServicePageR2
          },
          //#endregion
          //#region 公司注册页面
          {
            path: '/EnterSignUpPage/EnterCompanyPage',
            name: 'EnterCompanyPage',
            component: EnterCompanyPage
          },
          {
            path: '/EnterSignUpPage/EnterCompanyPageR2',
            name: 'EnterCompanyPageR2',
            component: EnterCompanyPageR2
          },
          {
            path: '/EnterSignUpPage/EnterCompanyPageR3',
            name: 'EnterCompanyPageR3',
            component: EnterCompanyPageR3
          },
          //#endregion
          //#region 招聘页面
          {
            path: '/EnterSignUpPage/EnterJoinUsPage',
            name: 'EnterJoinUsPage',
            component: EnterJoinUsPage
          },
          {
            path: '/EnterSignUpPage/EnterJoinUsPageR2',
            name: 'EnterJoinUsPageR2',
            component: EnterJoinUsPageR2
          }
          //#endregion
        ]
      }
    ]
  }
  //#endregion
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
