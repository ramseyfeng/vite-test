import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import "element-plus/packages/theme-chalk/src/base.scss";
import { createRouter, createWebHashHistory } from 'vue-router';
import routes from "@/router";
// import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

const app = createApp(App);
console.log(routes);
app.use(createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
}))
app.mount('#app')
