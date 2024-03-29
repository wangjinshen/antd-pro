import exception from './zh-CN/exception';
import globalHeader from './zh-CN/globalHeader';
import login from './zh-CN/login';
import menu from './zh-CN/menu';
import pwa from './zh-CN/pwa';
import component from './zh-CN/component';
import settings from './zh-CN/settings';
import settingDrawer from './zh-CN/settingDrawer';

export default {
  'navBar.lang': '语言',
  'layout.user.link.help': '帮助',
  'layout.user.link.privacy': '隐私',
  'layout.user.link.terms': '条款',
  ...exception,
  ...globalHeader,
  ...login,
  ...menu,
  ...pwa,
  ...component,
  ...settings,
  ...settingDrawer,
};
