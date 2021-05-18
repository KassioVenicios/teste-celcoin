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

const MenuItems = [
  { name: 'Dashboard', icon: 'home-outlined', active: true },
  { name: 'Pacientes', icon: 'product-downloadable' },
  { name: 'Testes', icon: 'product-downloadable' },
  { name: 'Configurações', icon: 'product-downloadable' },
];

const getActivedMenuIndex = () => MenuItems.findIndex(item => !! item.active);

function SideMenu() {
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
          MenuItems.map(item => (
            <SideMenuItem
              key={item.name}
              icon={item.icon}
              description={item.name}
              active={item.active}>
            </SideMenuItem>
          ))
        }
      </Items>
    </>
  );
}

export default SideMenu;
