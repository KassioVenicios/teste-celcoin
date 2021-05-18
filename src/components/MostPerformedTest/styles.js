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
  /* font-family: 'Open Sans'; */
  font-size: 26px;
  font-weight: bold;
  font-style: normal;
  line-height: 32px;
  color: #303B5B;
  margin: 0 0 16px 0;
`;

export const Subtitle = styled.h3`
  /* font-family: 'Open Sans'; */
  font-size: 10px;
  font-weight: 800;
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
  /* font-family: 'Open Sans'; */
  font-size: 26px;
  line-height: 48px;
  font-weight: bold;
  font-style: normal;
  color: #303B5B;
`;

export const BuyMoreButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 128px;
  height: 24px;
  cursor: pointer;
  margin-left: 16px;
  /* font-family: 'Open Sans'; */
  font-size: 10px;
  line-height: 8px;
  font-weight: bold;
  font-style: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #FFF;
  border-radius: 20px;
  background: linear-gradient(93.05deg, #00A3FF 0%, #0057FF 100%);
`;
