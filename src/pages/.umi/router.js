import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import RendererWrapper0 from '/Users/awang/Downloads/antd pro/antd-pro/src/pages/.umi/LocaleWrapper.jsx';

const Router = require('dva/router').routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/user',
    component: require('../../layouts/UserLayout').default,
    routes: [
      {
        path: '/user',
        redirect: '/user/login',
        exact: true,
      },
      {
        path: '/user/login',
        name: 'login',
        component: require('../User/Login').default,
        exact: true,
      },
      {
        component: require('../404').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('/Users/awang/Downloads/antd pro/antd-pro/node_modules/_umi-build-dev@1.16.5@umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    path: '/',
    component: require('../../layouts/BasicLayout').default,
    routes: [
      {
        path: '/',
        redirect: '/dashboard',
        exact: true,
      },
      {
        path: '/dashboard',
        name: '首页',
        icon: 'folder',
        component: require('../Dashboard/analysis').default,
        authority: ['admin', 'user', 'manager'],
        exact: true,
      },
      {
        name: '一号店分析',
        path: '/numberOneShop',
        component: require('../numberOneShop/index').default,
        exact: true,
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
            component: require('../special/member/index').default,
            authority: ['admin', 'user', 'manager'],
            routes: [
              {
                path: '/special/member',
                redirect: '/special/member/lifecycle/comprehensive',
                exact: true,
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
                    component: require('../special/member/lifecycle/comprehensive/index')
                      .default,
                    authority: ['admin', 'user', 'manager'],
                    exact: true,
                  },
                  {
                    path: '/special/member/lifecycle/noviceStage',
                    name: '新手分析',
                    icon: 'folder',
                    component: require('../special/member/lifecycle/noviceStage/index')
                      .default,
                    authority: ['admin', 'user', 'manager'],
                    exact: true,
                  },
                  {
                    component: () =>
                      React.createElement(
                        require('/Users/awang/Downloads/antd pro/antd-pro/node_modules/_umi-build-dev@1.16.5@umi-build-dev/lib/plugins/404/NotFound.js')
                          .default,
                        { pagesPath: 'src/pages', hasRoutesInConfig: true },
                      ),
                  },
                ],
              },
              {
                path: '/special/member/Insight',
                name: '洞察分析',
                icon: 'folder',
                component: require('../special/member/Insight/index').default,
                authority: ['admin', 'user', 'manager'],
                exact: true,
              },
              {
                component: require('../404').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('/Users/awang/Downloads/antd pro/antd-pro/node_modules/_umi-build-dev@1.16.5@umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            path: '/special/goods',
            name: '商品分析',
            icon: 'folder',
            component: require('../special/goods/index').default,
            authority: ['admin', 'user', 'manager'],
            exact: true,
          },
          {
            path: '/special/marketing',
            name: '营销分析',
            icon: 'folder',
            component: require('../special/marketing/index').default,
            authority: ['admin', 'user', 'manager'],
            exact: true,
          },
          {
            path: '/special/channel',
            name: '渠道分析',
            icon: 'folder',
            component: require('../special/channel/index').default,
            authority: ['admin', 'user', 'manager'],
            exact: true,
          },
          {
            component: require('../404').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/awang/Downloads/antd pro/antd-pro/node_modules/_umi-build-dev@1.16.5@umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        name: '运营分析',
        path: '/operating',
        component: require('../operating/index').default,
        exact: true,
      },
      {
        name: '供应链管理',
        path: '/supply',
        component: require('../supply/index').default,
        exact: true,
      },
      {
        component: require('../404').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('/Users/awang/Downloads/antd pro/antd-pro/node_modules/_umi-build-dev@1.16.5@umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    component: require('../404').default,
    exact: true,
  },
  {
    component: () =>
      React.createElement(
        require('/Users/awang/Downloads/antd pro/antd-pro/node_modules/_umi-build-dev@1.16.5@umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return (
      <RendererWrapper0>
        <Router history={history}>{renderRoutes(routes, props)}</Router>
      </RendererWrapper0>
    );
  }
}
