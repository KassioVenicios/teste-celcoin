import { Icon } from '@iconify/react';
import { getIcon } from '../../utils/iconify-icons';
import {
  Description,
  IconContainer,
  ItemContainer,
} from './styles';

function SideMenuItem({ description, icon, active }) {
  return (
    <ItemContainer active={active}>
      <IconContainer>
        <Icon icon={getIcon(icon)} />
      </IconContainer>
      <Description>{description}</Description>
    </ItemContainer>
  );
}

export default SideMenuItem;
