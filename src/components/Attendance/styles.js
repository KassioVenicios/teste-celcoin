import styled from 'styled-components';
import backgroundPattern from '../../assets/images/pattern.png';
import { getCustomIcon } from '../../utils/iconify-icons';

export const AttendanceContainer = styled.div`
  margin-right: 16px;
  border-radius: 6px;
  ${props => !! props.isHistoric ?
    'width: calc(100%/4);' :
    'min-width: 264px;'
  };
  border: 1px solid #EDF1F8;

  &:nth-last-child(1) {
    margin-right: 0;
  }
`;

export const CardHeader = styled.div`
  height: 136px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${backgroundPattern});
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AttendanceIcon = styled.div`
  width: 60px;
  height: 60px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${props => getCustomIcon(props.icon)});
`;

export const CardData = styled.div`
  padding: 16px;
`;

export const CardTitle = styled.div`
  font-family: 'OpenSans-Bold';
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  color: #303B5B;
`;

export const CardKey = styled.div`
  font-family: 'OpenSans-ExtraBold';
  font-size: 10px;
  line-height: 16px;
  font-style: normal;
  color: rgba(48, 59, 91, 0.3);
  margin-bottom: 8px;
  margin-top: 8px;
`;

export const CardValue = styled.div`
  font-family: 'OpenSans-SemiBold';
  font-size: 14px;
  line-height: 16px;
  font-style: normal;
  color: #303B5B;
  margin-top: 8px;
`;
