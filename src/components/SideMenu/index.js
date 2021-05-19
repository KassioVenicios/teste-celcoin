import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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

  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const MenuItems = useSelector(state => state.menus);

  const getMenuToActivate = () => MenuItems.find(item => item.to === pathname);
  const getActivedMenuIndex = () => MenuItems.findIndex(item => !! item.active);

  const itemToActivate = getMenuToActivate();
  !itemToActivate.active && changeActivedMenu(itemToActivate);

  function changeActivedMenu(item) {
    if (!!item.clickable) {
      dispatch({ type: 'CHANGE_ACTIVED_MENU', id: item.id });
    }
  }

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
            !! item.clickable ? (
              <Link to={item.to} key={item.id}>
                <SideMenuItem item={item} />
              </Link>
            ) : (
              <SideMenuItem item={item} key={item.id} />
            )
          )
        }
      </Items>
    </>
  );
}

export default SideMenu;
