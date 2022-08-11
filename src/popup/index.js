import Vue from 'vue'
import AppComponent from './App/App.vue'
import './App/styles/index.scss'
import 'normalize.css'
// import 'element-ui/lib/theme-chalk/index.css';
Vue.component('app-component', AppComponent)

// import {
//   Button,
//   Scrollbar,
// Tabs,
// TabPane,
// Input,
// } from 'element-ui';

// Vue.use(Scrollbar).use(Button);

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: (createElement) => {
    return createElement(AppComponent)
  },
})
