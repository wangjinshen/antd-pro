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
            require('/Users/awang/Downloads/antd pro/antd-pro/node_modules/_umi-build-dev@1.13.13@umi-build-dev/lib/plugins/404/NotFound.js')
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
        name: 'dashboard',
        icon: 'folder',
        component: require('../Dashboard/Workplace').default,
        authority: ['admin', 'user', 'manager'],
        exact: true,
      },
      {
        path: '/Outpatient',
        name: 'Outpatient',
        icon: 'folder',
        authority: ['user'],
        routes: [
          {
            path: '/Outpatient/appointment',
            name: 'appointment',
            component: require('../Outpatient/appointment').default,
            authority: ['admin', 'manager'],
            exact: true,
          },
          {
            path: '/Outpatient/template',
            name: 'template',
            component: require('../Outpatient/registered').default,
            exact: true,
          },
          {
            path: '/Outpatient/signature',
            name: 'signature',
            component: require('../Outpatient/preliminary').default,
            exact: true,
          },
          {
            path: '/Outpatient/clinicdetails',
            name: 'clinicdetails',
            component: require('../Outpatient/charge').default,
            exact: true,
          },
          {
            path: '/Outpatient/smsdetails',
            name: 'smsdetails',
            component: require('../Outpatient/checked').default,
            exact: true,
          },
          {
            path: '/Outpatient/zhanliao',
            name: 'zhenliao',
            component: require('../Outpatient/treatment').default,
            exact: true,
          },
          {
            path: '/Outpatient/communication',
            name: 'communication',
            component: require('../Outpatient/communication').default,
            exact: true,
          },
          {
            path: '/Outpatient/workers',
            name: 'workers',
            component: require('../Outpatient/workers').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/awang/Downloads/antd pro/antd-pro/node_modules/_umi-build-dev@1.13.13@umi-build-dev/lib/plugins/404/NotFound.js')
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
            require('/Users/awang/Downloads/antd pro/antd-pro/node_modules/_umi-build-dev@1.13.13@umi-build-dev/lib/plugins/404/NotFound.js')
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
        require('/Users/awang/Downloads/antd pro/antd-pro/node_modules/_umi-build-dev@1.13.13@umi-build-dev/lib/plugins/404/NotFound.js')
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
    routeChangeHandler(history.location);
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
