import dva from 'dva';
import { Component } from 'react';
import createLoading from 'dva-loading';
import history from '@tmp/history';

let app = null;

export function _onCreate() {
  const plugins = require('umi/_runtimePlugin');
  const runtimeDva = plugins.mergeConfig('dva');
  app = dva({
    history,
    
    ...(runtimeDva.config || {}),
    ...(window.g_useSSR ? { initialState: window.g_initialData } : {}),
  });
  
  app.use(createLoading());
  (runtimeDva.plugins || []).forEach(plugin => {
    app.use(plugin);
  });
  
  app.model({ namespace: 'global', ...(require('/Users/awang/Downloads/antd pro/antd-pro/src/models/global.js').default) });
app.model({ namespace: 'img', ...(require('/Users/awang/Downloads/antd pro/antd-pro/src/models/img.js').default) });
app.model({ namespace: 'login', ...(require('/Users/awang/Downloads/antd pro/antd-pro/src/models/login.js').default) });
app.model({ namespace: 'setting', ...(require('/Users/awang/Downloads/antd pro/antd-pro/src/models/setting.js').default) });
app.model({ namespace: 'user', ...(require('/Users/awang/Downloads/antd pro/antd-pro/src/models/user.js').default) });
app.model({ namespace: 'model', ...(require('/Users/awang/Downloads/antd pro/antd-pro/src/pages/Dashboard/analysis/model.tsx').default) });
  return app;
}

export function getApp() {
  return app;
}

export class _DvaContainer extends Component {
  render() {
    const app = getApp();
    app.router(() => this.props.children);
    return app.start()();
  }
}
