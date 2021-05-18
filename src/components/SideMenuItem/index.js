import { useDispatch } from 'react-redux';
import { Icon } from '@iconify/react';
import { getIcon } from '../../utils/iconify-icons';
import {
  Description,
  IconContainer,
  ItemContainer,
} from './styles';

function SideMenuItem({ item }) {

  const dispatch = useDispatch();

  function changeActivedMenu() {
    if (!!item.clickable) {
      dispatch({ type: 'CHANGE_ACTIVED_MENU', id: item.id });
    }
  }

  return (
    <ItemContainer active={item.active} onClick={changeActivedMenu}>
      <IconContainer>
        <Icon icon={getIcon(item.icon)} />
      </IconContainer>
      <Description>{item.name}</Description>
    </ItemContainer>
  );
}

export default SideMenuItem;
