import { Icon, Tooltip, Dropdown, Menu, Layout } from 'antd';
import React from 'react';
import { connect } from 'dva';
import { formatMessage } from 'umi-plugin-react/locale';
import Avatar from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import SelectLang from '../SelectLang';
import styles from './index.less';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Link } from 'umi';

const { Header, Content, Footer, Sider } = Layout;

const style = {
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
};

const setMenu = menu => {
  if (menu.children) {
    return (
      menu.children &&
      menu.children.map(item => {
        return (
          <Menu.Item key={item.path}>
            <Link to={item.path}> {item.name}</Link>{' '}
          </Menu.Item>
        );
      })
    );
  }
};

const GlobalHeaderRight = props => {
  const { theme, layout, menuData, location } = props;
  let className = styles.right;
  if (theme === 'dark' && layout === 'topmenu') {
    className = `${styles.right}  ${styles.dark}`;
  }
  const handleClick = e => {};
  return (
    <Header className="header" style={{ width: '100%' }}>
      <Menu
        style={{ height: '100%', lineHeight: '64px' }}
        onClick={handleClick}
        selectedKeys={location.pathname}
        theme="dark"
        mode="horizontal"
      >
        {menuData.map((e, k) => {
          if (e.children) {
            return (
              <SubMenu key={e.path} title={e.name}>
                {setMenu(e)}
              </SubMenu>
            );
          } else {
            return (
              <Menu.Item key={e.path}>
                <Link to={e.path}>{e.name}</Link>
              </Menu.Item>
            );
          }
        })}
      </Menu>
    </Header>
  );
};

export default connect(({ settings }) => ({
  theme: settings.navTheme,
  layout: settings.layout,
}))(GlobalHeaderRight);
