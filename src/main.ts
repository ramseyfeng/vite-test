import {createApp, ref} from 'vue'
import App from './App.vue'
import './styles/index.scss'
import "element-plus/packages/theme-chalk/src/index.scss";
import router from "@/router";

const app = createApp(App);
app.use(router)
app.mount('#app')
app.directive('font-size', {
    mounted: (el, binding) => {
        el.style.fontSize = '36px';
    }
})
app.directive('focus', {
    mounted: (el, binding) => {
        el.querySelector('input').focus()
    }
})
app.provide('yourImage', ref(sessionStorage.getItem('image')))
app.provide('myGlobalVariable', ref('a'));