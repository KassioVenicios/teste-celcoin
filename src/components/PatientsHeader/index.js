import Icon from '@iconify/react';
import { getIcon } from '../../utils/iconify-icons';
import {
  HeaderTitle,
  IconContainer,
  IconSearchContainer,
  LeftSide,
  PatientsHeaderContainer,
  RightSide,
  Search,
  SearchInput,
} from './styles';

function PatientsHeader() {

  const qty = 36;

  return (
    <PatientsHeaderContainer>
      <LeftSide>
        <HeaderTitle>Lista de Pacientes ({qty})</HeaderTitle>
        <Search>
          <IconSearchContainer>
            <Icon icon={getIcon('baseline-search')} />
          </IconSearchContainer>
          <SearchInput placeholder='Busca...' className='placeholderInput' />
        </Search>
      </LeftSide>
      <RightSide>
        <IconContainer>
          <Icon icon={getIcon('bx-dots-horizontal-rounded')} />
        </IconContainer>
      </RightSide>
    </PatientsHeaderContainer>
  );
}

export default PatientsHeader;
