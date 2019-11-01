import { Icon, Tooltip, Dropdown, Menu } from 'antd';
import React from 'react';
import { connect } from 'dva';
import { formatMessage } from 'umi-plugin-react/locale';
import Avatar from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import SelectLang from '../SelectLang';
import styles from './index.less';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Link } from 'umi';


const style = {
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: "100%"
  }
}


const setMenu = menu => {
  if (menu.children) {
    return menu.children && menu.children.map(item => {
      return <Menu.Item key={item.path}><Link to={item.path}> {item.name}</Link> </Menu.Item>
    })
  }
}

const GlobalHeaderRight = props => {
  const { theme, layout, menuData, location } = props;
  let className = styles.right;
  if (theme === 'dark' && layout === 'topmenu') {
    className = `${styles.right}  ${styles.dark}`;
  }
  const handleClick = e => {
    
  }
  return (
    <Menu onClick={handleClick} selectedKeys={location.pathname} mode="horizontal">
      {
        menuData.map((e, k) => {
          if (e.children) {
            return <SubMenu style={style.content} key={e.path} title={e.name}>{setMenu(e)}</SubMenu>
          } else {
            return (
              <Menu.Item key={e.path} >
                <Link style={style.content} to={e.path}>{e.name}</Link>
              </Menu.Item>
            )
          }
        })
      }
    </Menu>
  );
};

export default connect(({ settings }) => ({
  theme: settings.navTheme,
  layout: settings.layout,
}))(GlobalHeaderRight);
