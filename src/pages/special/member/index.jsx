
import React, { useState, Component } from 'react';
import { Link } from 'umi';
import { connect } from 'dva';
import styles from './index.css';
import SubMenu from 'antd/lib/menu/SubMenu';
import Authorized from '@/utils/Authorized';
import { getAuthorityFromRouter, deconstruction } from '@/utils/utils';
import { Result, Button, Layout, Breadcrumb, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const noMatch = (
  <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={
      <Button type="primary">
        <Link to="/user/login">Go Login</Link>
      </Button>
    }
  />
);
const SetMenu = routes => {

  return routes.map(res => {
    if (res.routes) {
      return res.path ? <SubMenu style={{ margin: 0 }} title={res.name} key={res.path}> {SetMenu(res.routes)}</SubMenu> : ""
    } else {
      return res.name ? <Menu.Item style={{ margin: 0 }} key={res.path}><Link to={res.path}>{res.name}</Link></Menu.Item> : ""
    }
  })
}

const SetMenuKey = routes => {
  var arr = []
  if (routes instanceof Array) {
    routes.map(res => {
      if (res.routes) {
        arr = [...arr, ...SetMenuKey(res)]
      } else {
        arr.push(res.path)
      }
    })
  } else {
    arr.push(routes.path)
  }
  return arr
}

class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openKeys: [props.location.pathname],
      rootSubmenuKeys: SetMenuKey(props.route.routes).filter(e => e && e)
    }
  }
  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }
  componentDidMount() {

    let openKeys = this.state.rootSubmenuKeys.filter(e => {
      console.log(location.pathname, e)
      return location.pathname.indexOf(e) != -1 && e
    })
    this.setState({
      openKeys
    })
  }
  render() {
    const {
      dispatch,
      children,
      settings,
      global,
      location,
      route
    } = this.props;
    const { openKeys } = this.state
    const authorized = getAuthorityFromRouter(this.props.route.routes, location.pathname || '/') || {
      authority: undefined,
    };
    return (
      <Layout>
        <Content style={{ padding: '0 50px' }}>
          <Layout style={{ background: '#fff' }}>
            <Sider width={200} style={{ background: '#fff' }} inlinecollapsed={'false'}>
              <Menu key={location.pathname}
                mode="inline"
                defaultSelectedKeys={[location.pathname]}
                style={{ height: '100%' }}
                openKeys={openKeys}
                onOpenChange={this.onOpenChange}
              >
                <Menu.Item style={{ margin: 0 }} disabled title={route.name} > {route.name}</Menu.Item>
                {SetMenu(route.routes)}
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <Authorized authority={authorized.authority} noMatch={noMatch}>
                {children}
              </Authorized>
            </Content>
          </Layout>
        </Content>
      </Layout>
    );
  }
}

export default connect(({ global, settings }) => ({
  collapsed: global.collapsed,
  settings,
}))(Member)
