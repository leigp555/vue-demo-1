import Vue from 'vue'
import Demo from "./demo.vue"

Vue.config.productionTip = false

console.log(Demo.render.toString());
new Vue({
    el: "#app",
    render(h) {
        return h(Demo)
    }
})