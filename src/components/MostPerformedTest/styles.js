import styled from 'styled-components';
import { getCustomIcon } from '../../utils/iconify-icons';

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 112px;
  margin-top: 16px;
  margin-bottom: 40px;
`;

export const CustomIcon = styled.div`
  width: 93px;
  height: 93px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${props => getCustomIcon(props.icon)});
`;

export const TestName = styled.h2`
  font-family: 'OpenSans-Bold';
  font-size: 26px;
  font-style: normal;
  line-height: 32px;
  color: #303B5B;
  margin: 0 0 16px 0;
`;

export const Subtitle = styled.h3`
  font-family: 'OpenSans-ExtraBold';
  font-size: 10px;
  font-style: normal;
  line-height: 16px;
  color: rgba(48, 59, 91, 0.3);
  margin: 0 0 8px 0;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
`;

export const TestData = styled.span`
  font-family: 'OpenSans-Bold';
  font-size: 26px;
  line-height: 48px;
  font-style: normal;
  color: #303B5B;
  margin-right: 16px;
`;
