import Vue from 'vue'
import Demo from "./demo.vue"
//
// Vue.config.productionTip = false
//
//
//

//非完整版

// //引入方法runtime.js
// new Vue({
//     el: "#app",
//     render(h) {
//         return h(Demo)
//     }
// })

//引入方法runtime.js
new Vue({
    render:h=>h(Demo)
}).$mount("#app")
console.log(Demo)


//完整版使用

// new Vue({
//     el:"#app",
//     template:`
//       <div> {{n}} </div>`
//     ,
//     data:{n:0}
// })
