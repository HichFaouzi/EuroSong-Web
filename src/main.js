import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

//ES5
for(var i = 0; i < 10; i++){
  console.log(i);
}

console.log(i);

//ES6
//Const kun je niet veranderen doorheen het project, let wel.

let firstname = "Hicham";
console.log(firstname);
firstname = "hahaha";
console.log(firstname);

