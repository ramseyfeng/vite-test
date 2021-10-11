import {RouteRecordRaw} from 'vue-router';
// import TodoList from '../components/TodoList/';

const routes: RouteRecordRaw[] = [
    {
        path: "/vue-samples/todo-list",
        component: () => import('@/components/TodoList/index.vue'),
    }
]

export default routes;
