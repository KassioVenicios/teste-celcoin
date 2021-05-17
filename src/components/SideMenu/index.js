import {
  Header,
  HeaderTitle,
  HeaderTitleBold,
  LineDivisor,
  Logo,
} from './styles';

function SideMenu() {
  return (
    <>
      <Header>
        <Logo />
        <HeaderTitle><HeaderTitleBold>IDENT</HeaderTitleBold>LOGO</HeaderTitle>
      </Header>
      <LineDivisor />
    </>
  );
}

export default SideMenu;
