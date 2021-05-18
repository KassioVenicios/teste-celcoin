import homeOutlined from '@iconify-icons/ant-design/home-outlined';
import productDonwloadable from '@iconify-icons/gridicons/product-downloadable';
import noticeIcon from '@iconify-icons/gridicons/notice';

export const getIcon = name => {
  switch(name) {
    case 'home-outlined': return homeOutlined;
    case 'product-downloadable': return productDonwloadable;
    default: return noticeIcon;
  };
};
