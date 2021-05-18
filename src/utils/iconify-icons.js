import homeOutlined from '@iconify-icons/ant-design/home-outlined';
import productDonwloadable from '@iconify-icons/gridicons/product-downloadable';
import noticeIcon from '@iconify-icons/gridicons/notice';
import baselineSearch from '@iconify-icons/ic/baseline-search';
import baselineNotifications from '@iconify-icons/ic/baseline-notifications';
import baselineSettings from '@iconify-icons/ic/baseline-settings';
import logoutOutline from '@iconify-icons/heroicons-outline/logout';
import baselinePersonOutline from '@iconify-icons/ic/baseline-person-outline';
import bxTestTube from '@iconify-icons/bx/bx-test-tube';
import bxTestTubeOk from '../assets/images/bx-test-tube-ok.svg';
import bxTestTubeX from '../assets/images/bx-test-tube-x.svg';
import uilCell from '../assets/images/uil-cell.svg';
import uilBrain from '../assets/images/uil-brain.svg';

export const getIcon = name => {
  switch(name) {
    case 'home-outlined': return homeOutlined;
    case 'product-downloadable': return productDonwloadable;
    case 'baseline-search': return baselineSearch;
    case 'baseline-notifications': return baselineNotifications;
    case 'baseline-settings': return baselineSettings;
    case 'logout-outline': return logoutOutline;
    case 'baseline-person-outline': return baselinePersonOutline;
    case 'bx-test-tube': return bxTestTube;
    default: return noticeIcon;
  };
};

export const getCustomIcon = name => {
  switch(name) {
    case 'bx-test-tube-ok': return bxTestTubeOk;
    case 'bx-test-tube-x': return bxTestTubeX;
    case 'uil-cell': return uilCell;
    case 'uil-brain': return uilBrain;
    default: return noticeIcon;
  };
};
