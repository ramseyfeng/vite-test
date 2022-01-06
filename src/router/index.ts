import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';
import {LOGIN_TOKEN} from "@/constants/login";

const excludePaths = [
    '/login',
    '/register'
];

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
                path: 'knowledge',
                component: () => import('@/pages/KnowledgePage/index.vue'),
                redirect: '/home/samples/knowledge/data-bindings',
                children: [
                    {
                        path: 'data-bindings',
                        component: () => import('@/pages/DataBinding/index.vue')
                    },
                    {
                        path: 'v-model',
                        component: () => import('@/pages/VModelPage/index.vue')
                    },
                    {
                        path: 'life-cycle',
                        component: () => import('@/pages/LifeCyclePage/index.vue')
                    },
                    {
                        path: 'params-sample',
                        component: () => import('@/pages/Params/index.vue')
                    },
                    {
                        path: 'simple-router',
                        component: () => import('@/pages/SimpleRouter/index.vue'),
                        children: [
                            {
                                path: 'test1',
                                component: () => import('@/pages/SimpleRouter/pages/Test1/index.vue'),
                            },
                            {
                                path: 'test6',
                                component: () => import('@/pages/SimpleRouter/pages/Test6/index.vue'),
                            }
                        ]
                    },
                    {
                        path: 'hooks-sample',
                        component: () => import('@/pages/HooksSamplePage/index.vue')
                    },
                    {
                        path: 'global-var',
                        component: () => import('@/pages/GlobalVar/index.vue')
                    }
                ]
            },
            {
                path: 'samples',
                component: () => import('@/pages/SamplesPage/index.vue'),
                redirect: '/home/samples/todos',
                children: [
                    {
                        path: 'todos',
                        component: () => import('@/pages/TodoListPage.vue')
                    }
                ]
            }
        ]
    },
    {
        path: '/login',
        component: () => import('@/pages/Login/index.vue')
    },
    {
        path: '/register',
        component: () => import('@/pages/Register/index.vue')
    }
];

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
});

router.beforeEach((to, from, next) => {
    if (excludePaths.includes(to.path)) {
        next();
        return;
    }
    if (localStorage.getItem(LOGIN_TOKEN)) {
        next();
    } else {
        next('/login');
    }
});

export default router;
