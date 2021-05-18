import { useSelector } from 'react-redux';
import SideMenuItem from '../SideMenuItem';
import {
  Header,
  HeaderTitle,
  HeaderTitleBold,
  ItemActiveBackground,
  Items,
  LineDivisor,
  Logo,
} from './styles';

function SideMenu() {

  const MenuItems = useSelector(state => state.menus);
  const getActivedMenuIndex = () => MenuItems.findIndex(item => !! item.active);

  return (
    <>
      <Header>
        <Logo />
        <HeaderTitle><HeaderTitleBold>IDENT</HeaderTitleBold>LOGO</HeaderTitle>
      </Header>
      <LineDivisor />
      <Items>
        <ItemActiveBackground index={getActivedMenuIndex()} />
        {
          MenuItems.map(item =>
            <SideMenuItem key={item.id} item={item} />
          )
        }
      </Items>
    </>
  );
}

export default SideMenu;
