import { Icon } from '@iconify/react';
import { getIcon } from '../../utils/iconify-icons';
import {
  IconContainer,
  LeftSide,
  RightSide,
  Search,
  TopNavBarContent
} from './styles';

function TopNavBar() {
  return (
    <TopNavBarContent>
      <LeftSide>
        <IconContainer>
          <Icon icon={getIcon('baseline-search')} />
        </IconContainer>
        <Search placeholder='Busca...' className='placeholderInput' />
      </LeftSide>
      <RightSide>

      </RightSide>
    </TopNavBarContent>
  );
};

export default TopNavBar;
