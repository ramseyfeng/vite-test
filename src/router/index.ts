import {RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('@/pages/HomePage.vue'),
        redirect: '/home/samples',
        children: [
            {
                path: 'samples',
                component: () => import('@/pages/SamplesPage/index.vue'),
                children: [
                    {
                        path: 'data-bindings',
                        component: () => import('@/pages/DataBinding/index.vue')
                    },
                    {
                        path: 'todos',
                        component: () => import('@/pages/TodoListPage.vue')
                    }
                ]
            }
        ]
    },
];

export default routes;
