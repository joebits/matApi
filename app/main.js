import Vue from 'vue';
import App from './App.vue';
import vueResource from 'vue-resource'
import Materials from 'vue-materials'

new Vue({
  el: '#app',
  render: h => h(App),
  http: {
    root: '/root',
    headers: {
      Authorization: 'Basic YXBpOnBhc3N3b3Jk'
    }
  }
});

Vue.use(vueResource)
Vue.use(Materials)