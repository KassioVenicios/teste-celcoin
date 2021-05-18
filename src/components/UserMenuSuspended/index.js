import Icon from '@iconify/react';
import { getIcon } from '../../utils/iconify-icons';
import {
  IconContainer,
  UserMenuItem,
  UserMenuItemText,
  UserMenuSuspendedContent,
} from './styles';

function UserMenuSuspended({ opened }) {
  return (
    <UserMenuSuspendedContent opened={opened}>
      <UserMenuItem>
        <UserMenuItemText>Minha conta</UserMenuItemText>
      </UserMenuItem>
      <UserMenuItem>
        <UserMenuItemText>Configurações</UserMenuItemText>
      </UserMenuItem>
      <UserMenuItem>
        <IconContainer>
          <Icon icon={getIcon('logout-outline')} />
        </IconContainer>
        <UserMenuItemText>Sair</UserMenuItemText>
      </UserMenuItem>
    </UserMenuSuspendedContent>
  );
}

export default UserMenuSuspended;
