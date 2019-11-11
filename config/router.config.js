export default [
    // user
    {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
            {
                path: '/user',
                redirect: '/user/login',
            },
            {
                path: '/user/login',
                name: 'login',
                component: './User/Login',
            },
            {
                component: '404',
            },
        ],
    }, // app
    {
        path: '/',
        component: '../layouts/BasicLayout',
        routes: [
            {
                path: '/',
                redirect: '/dashboard',
            },
            {
                path: '/dashboard',
                name: '首页',
                icon: 'folder',
                component: './Dashboard/analysis',
                authority: ['admin', 'user', 'manager'],
            },
            {
                name: '一号店分析',
                path: '/numberOneShop',
                component: './numberOneShop/index',
            },
            {
                name: '专题分析',
                path: '/special',
                authority: ['admin', 'user', 'manager'],
                routes: [
                    {
                        path: '/special/member',
                        name: '会员分析',
                        icon: 'folder',
                        component: './special/member/index',
                        authority: ['admin', 'user', 'manager'],
                        routes: [
                            {
                                path: '/special/member',
                                redirect: '/special/member/lifecycle/comprehensive',
                            },
                            {
                                path: '/special/member/lifecycle',
                                name: '生命周期分析',
                                icon: 'folder',
                                authority: ['admin', 'user', 'manager'],
                                routes: [
                                    {
                                        path: '/special/member/lifecycle/comprehensive',
                                        name: '综合分析',
                                        icon: 'folder',
                                        component: './special/member/lifecycle/comprehensive/index',
                                        authority: ['admin', 'user', 'manager'],
                                    },
                                    {
                                        path: '/special/member/lifecycle/noviceStage',
                                        name: '新手分析',
                                        icon: 'folder',
                                        component: './special/member/lifecycle/noviceStage/index',
                                        authority: ['admin', 'user', 'manager'],
                                    },
                                ],
                            },
                            {
                                path: '/special/member/Insight',
                                name: '洞察分析',
                                icon: 'folder',
                                component: './special/member/Insight/index',
                                authority: ['admin', 'user', 'manager'],
                            },
                            {
                                component: '404',
                            },
                        ],
                    },
                    {
                        path: '/special/goods',
                        name: '商品分析',
                        icon: 'folder',
                        component: './special/goods/index',
                        authority: ['admin', 'user', 'manager'],
                    },
                    {
                        path: '/special/marketing',
                        name: '营销分析',
                        icon: 'folder',
                        component: './special/marketing/index',
                        authority: ['admin', 'user', 'manager'],
                    },
                    {
                        path: '/special/channel',
                        name: '渠道分析',
                        icon: 'folder',
                        component: './special/channel/index',
                        authority: ['admin', 'user', 'manager'],
                    },
                    {
                        component: '404',
                    },
                ],
            },
            {
                name: '运营分析',
                path: '/operating',
                component: './operating/index',
            },
            {
                name: '供应链管理',
                path: '/supply',
                component: './supply/index',
            },
            {
                component: '404',
            },
        ],
    },
    {
        component: '404',
    },
];
