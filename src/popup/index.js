import Vue from 'vue'
import AppComponent from './App/App.vue'
import './App/styles/index.scss'
import 'normalize.css'
import JsonExcel from 'vue-json-excel'

Vue.component('downloadExcel', JsonExcel)
Vue.component('app-component', AppComponent)

// import {
  // Button,
  // Scrollbar,
  // Tabs,
  // TabPane,
  // Table,
  // TableColumn,
  // Radio,
  // RadioGroup,
  // Alert,
  // Card,
  // Form,
  // FormItem,
  // TimeSelect,
  // Input,
  // InputNumber,
  // Transfer,
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
