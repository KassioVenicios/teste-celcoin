import homeOutlined from '@iconify-icons/ant-design/home-outlined';
import productDonwloadable from '@iconify-icons/gridicons/product-downloadable';
import noticeIcon from '@iconify-icons/gridicons/notice';
import baselineSearch from '@iconify-icons/ic/baseline-search';

export const getIcon = name => {
  switch(name) {
    case 'home-outlined': return homeOutlined;
    case 'product-downloadable': return productDonwloadable;
    case 'baseline-search': return baselineSearch;
    default: return noticeIcon;
  };
};
