import { Icon } from '@iconify/react';
import { getIcon } from '../../utils/iconify-icons';
import {
  AppsIcon,
  IconContainer,
  IconSearchContainer,
  LeftSide,
  RightSide,
  Search,
  TopNavBarContent
} from './styles';

function TopNavBar() {
  return (
    <TopNavBarContent>
      <LeftSide>
        <IconSearchContainer>
          <Icon icon={getIcon('baseline-search')} />
        </IconSearchContainer>
        <Search placeholder='Busca...' className='placeholderInput' />
      </LeftSide>
      <RightSide>
        <IconContainer>
          <Icon icon={getIcon('baseline-settings')} />
        </IconContainer>
        <IconContainer active={true}>
          <Icon icon={getIcon('baseline-notifications')} />
        </IconContainer>
        <AppsIcon />
      </RightSide>
    </TopNavBarContent>
  );
};

export default TopNavBar;
