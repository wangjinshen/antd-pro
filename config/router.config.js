
export default [
    // user
    {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
            { path: '/user', redirect: '/user/login' },
            { path: '/user/login', name: 'login', component: './User/Login' },
            {
                component: '404',
            },
        ],
    },
    // app
    {
        path: '/',
        component: '../layouts/BasicLayout',
        routes: [
            { path: '/', redirect: '/dashboard' },
            // 工作台
            {
                path: '/dashboard',
                name: 'dashboard',
                icon: 'folder',
                component: './Dashboard/Workplace',
                authority: ['admin', 'user', 'manager']
            },
            // 门诊管理
            {
                path: '/Outpatient',
                name: 'Outpatient',
                icon: 'folder',
                authority: ['user'],
                routes: [
                    // 预约咨询
                    {
                        path: '/Outpatient/appointment',
                        name: 'appointment',
                        component: './Outpatient/appointment',
                        authority: ['admin', 'manager']
                    },
                    // 挂号
                    {
                        path: '/Outpatient/template',
                        name: 'template',
                        component: './Outpatient/registered',
                    },
                    // 预诊
                    {
                        path: '/Outpatient/signature',
                        name: 'signature',
                        component: './Outpatient/preliminary',
                    },
                    // 收费
                    {
                        path: '/Outpatient/clinicdetails',
                        name: 'clinicdetails',
                        component: './Outpatient/charge',
                        // hideInMenu: true
                    },
                    // 检查单
                    {
                        path: '/Outpatient/smsdetails',
                        name: 'smsdetails',
                        component: './Outpatient/checked',

                    },
                    // 诊疗
                    {
                        path: '/Outpatient/zhanliao',
                        name: 'zhenliao',
                        component: './Outpatient/treatment',

                    },
                    // 沟通
                    {
                        path: '/Outpatient/communication',
                        name: 'communication',
                        component: './Outpatient/communication',
                    },
                    // 机加工
                    {
                        path: '/Outpatient/workers',
                        name: 'workers',
                        component: './Outpatient/workers',

                    },
                ],
            },
            // // 病历中心
            // {
            //     icon: 'folder',
            //     path: '/emr',
            //     name: 'emr',
            //     // component: './Account/Index',
            //     // authority: ['opuser:list', 'oprole:list', 'opdept:list'],
            //     routes: [
            //         // 病历评审
            //         {
            //             path: '/opuser/dept',
            //             component: './Account/Dept',
            //             name: 'dept',
            //         },
            //         // 会诊
            //         {
            //             path: '/opuser/user',
            //             component: './Account/Users',
            //             name: 'user',
            //         },
            //         // 修改病历申请
            //         {
            //             path: '/opuser/role',
            //             component: './Account/Role',
            //             name: 'role',
            //         },
            //         // 病历库
            //         {
            //             path: '/opuser/logout',
            //             component: './Account/Role',
            //             name: 'logout',
            //         },
            //     ],
            // },
            // // 意向客户
            // {
            //     path: '/customer',
            //     name: 'customer',
            //     icon: 'folder',
            //     component: './Customer',
            // },
            // // 营销管理
            // {
            //     path: '/marketing',
            //     name: 'marketing',
            //     icon: 'folder',
            //     component: './Marketing',

            // },
            // // 进销存管理
            // {
            //     path: '/eliminate',
            //     name: 'eliminate',
            //     icon: 'folder',
            //     routes: [
            //         {
            //             path: '/eliminate/procurement',
            //             name: 'procurement',
            //             component: './Net/procurement',

            //         },
            //         {
            //             path: 'eliminate/warehouse',
            //             name: 'warehouse',
            //             component: './Net/home',
            //         },
            //         {
            //             path: 'eliminate/items',
            //             name: 'items',
            //             component: './Net/somes',

            //         }

            //     ]
            // },
            // // 报表中心
            // {
            //     path: '/report',
            //     name: 'report',
            //     icon: 'folder',

            //     routes: [
            //         {
            //             path: '/report/business',
            //             name: 'business',
            //             component: './Table/business',
            //         },
            //         {
            //             path: '/report/results',
            //             component: './Table/grade',
            //             name: 'results',
            //         },
            //         {
            //             path: '/report/financial',
            //             name: 'financial',
            //             component: './Table/financial',
            //         },
            //     ]
            // },

            // // 投诉管理
            // {
            //     path: '/complaints',
            //     name: 'complaints',
            //     icon: 'folder',
            //     component: './Complain'

            // },

            // // 知识库
            // {
            //     path: '/knowledge',
            //     name: 'knowledge',
            //     icon: 'folder',

            //     routes: [
            //         //客诉话术
            //         {
            //             path: '/knowledge/technique',
            //             name: 'technique',
            //             component: './Knowledge/technique',
            //         },
            //         //经典案例
            //         {
            //             path: '/knowledge/case',
            //             name: 'case',
            //             component: './Knowledge/case',
            //         },
            //         //医疗话术
            //         {
            //             path: '/knowledge/medical',
            //             name: 'medical',
            //             component: './Knowledge/medical',
            //         },
            //     ],
            // },
            // // 系统管理
            // {
            //     path: '/system',
            //     icon: 'folder',
            //     name: 'system',
            //     routes: [
            //         // 账户管理
            //         {
            //             path: '/system/account',
            //             name: 'account',
            //             component: './system/account',
            //         },
            //         // 安全管理
            //         {
            //             path: '/system/dander',
            //             name: 'dander',
            //             component: './system/security',

            //         },
            //         // 诊所管理
            //         {
            //             path: '/system/clinic',
            //             name: 'clinic',
            //             component: './system/clinic',
            //         },
            //         // 基础信息
            //         {
            //             path: '/system/information',
            //             name: 'base',
            //             component: './system/information',
            //         },
            //         // 物流管理
            //         {
            //             path: '/system/logistics',
            //             name: 'logistics',
            //             component: './system/logistics',


            //         },
            //         // 短信
            //         {
            //             path: '/system/sms',
            //             name: 'sms',
            //             component: './system/sms',
            //         },
            //         // 公告
            //         {
            //             path: '/system/announcement',
            //             name: 'announcement',
            //             component: './system/sign',
            //         },
            //     ],
            // },
            // // 账户管理
            // {
            //     path: '/opaccount',
            //     name: 'opaccount',
            //     icon: 'folder',
            //     // authority: ['opaccount'],
            //     routes: [
            //         {
            //             path: '/opaccount',
            //             name: 'accountTenant',
            //             component: './Account/Information',
            //         },
            //     ],
            // },
            // // 公告管理
            // {
            //     path: '/opnotice',
            //     name: 'opnotice',
            //     icon: 'folder',
            //     // authority: ['opnotice'],
            //     routes: [
            //         {
            //             path: '/opnotice',
            //             name: 'notice-list',
            //             component: './Notice/Notice',
            //         },
            //     ],
            // },
            // // 短信管理
            // {
            //     path: '/opsms',
            //     name: 'opsms',
            //     icon: 'folder',
            //     // authority: ['opsms:statistics', 'opsms:template', 'opsms:signature'],
            //     routes: [
            //         {
            //             path: '/opsms/statistics',
            //             name: 'statistics',
            //             component: './OpSms/Statistics',
            //         },
            //         {
            //             path: '/opsms/template',
            //             name: 'template',
            //             component: './OpSms/Template',
            //         },
            //         {
            //             path: '/opsms/signature',
            //             name: 'signature',
            //             component: './OpSms/Sign',
            //         },
            //         {
            //             path: '/opsms/clinicdetails',
            //             name: 'clinicdetails',
            //             component: './OpSms/ClinicDetails',
            //             hideInMenu: true
            //         },
            //         {
            //             path: '/opsms/smsdetails',
            //             name: 'smsdetails',
            //             component: './OpSms/SmsDetails',
            //             hideInMenu: true
            //         },
            //     ],
            // },
            // // 用户管理
            // {
            //     icon: 'folder',
            //     path: '/opuser',
            //     name: 'opuser',
            //     // component: './Account/Index',
            //     // authority: ['opuser:list', 'oprole:list', 'opdept:list'],
            //     routes: [
            //         {
            //             path: '/opuser/dept',
            //             component: './Account/Dept',
            //             name: 'dept',
            //         },
            //         {
            //             path: '/opuser/user',
            //             component: './Account/Users',
            //             name: 'user',
            //         },
            //         {
            //             path: '/opuser/role',
            //             component: './Account/Role',
            //             name: 'role',
            //         },
            //     ],
            // },
            // // 监控中心
            // {
            //     path: '/opmonitor',
            //     icon: 'folder',
            //     name: 'opmonitor',
            //     routes: [
            //         {
            //             path: '/opmonitor',
            //             redirects: [
            //                 { path: '/opmonitor/loginlog', /*authority: ['opmonitor:loginlog']*/ },
            //                 { path: '/opmonitor/log', /*authority: ['opmonitor:log']*/ },
            //                 { path: '/opmonitor/operating', /*authority: ['opmonitor:operating']*/ },
            //             ],
            //         },
            //         {
            //             path: '/opmonitor/loginlog',
            //             name: 'login-log',
            //             component: './Log/DevicesLog',
            //         },
            //         {
            //             path: '/opmonitor/log',
            //             name: 'log',
            //             component: './Log/MonitoringLog',
            //         },
            //         {
            //             path: '/opmonitor/operating',
            //             name: 'operating',
            //             component: './Log/OperationLog',
            //         },
            //     ],
            // },
            // //个人中心
            // {
            //     path: '/usercenter',
            //     name: 'usercenter',
            //     icon: 'folder',
            //     routes: [
            //         {
            //             path: '/usercenter',
            //             redirects: [
            //                 { path: '/usercenter/template', /*authority: ['opmonitor:loginlog']*/ },
            //                 { path: '/usercenter/message', /*authority: ['opmonitor:log']*/ },
            //                 { path: '/usercenter/audit', /*authority: ['opmonitor:operating']*/ },
            //                 { path: '/usercenter/profile', /*authority: ['opmonitor:operating']*/ },
            //             ],
            //         },
            //         {
            //             path: '/usercenter/template',
            //             name: 'template',
            //             component: './Log/DevicesLog',
            //         },
            //         {
            //             path: '/usercenter/message',
            //             name: 'message',
            //             component: './Log/MonitoringLog',
            //         },
            //         {
            //             path: '/usercenter/audit',
            //             name: 'audit',
            //             component: './Log/OperationLog',
            //         },
            //         {
            //             path: '/usercenter/profile',
            //             name: 'profile',
            //             component: './Personal/ProfileCenter',
            //         },
            //     ],
            // },
            // {
            //     name: 'exception',
            //     icon: 'warning',
            //     path: '/exception',
            //     hideInMenu: true,
            //     routes: [
            //         // exception
            //         {
            //             path: '/exception/403',
            //             name: 'not-permission',
            //             component: './Exception/403',
            //         },
            //         {
            //             path: '/exception/404',
            //             name: 'not-find',
            //             component: './Exception/404',
            //         },
            //         {
            //             path: '/exception/500',
            //             name: 'server-error',
            //             component: './Exception/500',
            //         },
            //         {
            //             component: '404',
            //         },
            //     ],
            // },
            {
                component: '404',
            },
        ],
    },
    {
        component: '404',
    },
];
