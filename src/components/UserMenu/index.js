import { useState } from 'react';
import {
  UserMenuContent,
  UserName,
  UserNameBold,
  UserPhoto,
} from './styles';
import UserMenuSuspended from '../UserMenuSuspended';

function UserMenu() {

  const [opened, setOpened] = useState(false);

  function openCloseUserMenu() {
    setOpened(! opened);
  }

  return (
    <UserMenuContent onClick={openCloseUserMenu}>
      <UserName>Olá, <UserNameBold>Felipe</UserNameBold></UserName>
      <UserPhoto />
      <UserMenuSuspended opened={opened} />
    </UserMenuContent>
  );
}

export default UserMenu;
