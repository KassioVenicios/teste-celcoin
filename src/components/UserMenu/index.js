import {
  UserMenuContent,
  UserName,
  UserNameBold,
  UserPhoto,
} from './styles';

function UserMenu() {
  return (
    <UserMenuContent>
      <UserName>Olá, <UserNameBold>Felipe</UserNameBold></UserName>
      <UserPhoto />
    </UserMenuContent>
  );
}

export default UserMenu;
