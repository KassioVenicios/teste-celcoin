import styled from 'styled-components';
import backImage from '../assets/images/artboard.png';

export const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  padding: 32px 40px;
  background: url(${backImage}), linear-gradient(107.65deg, #1042DD 0.43%, #24B0A8 100%);
`;

export const SideMenuContainer = styled.div`
  width: 248px;
  height: 100%;
`;

export const ContentContainer = styled.div`
  height: 100%;
  flex-grow: 1;
  border-radius: 30px;
  background-color: #EFF2F9;
`;

export const TopNavBarContainer = styled.div`
  height: 88px;
  background-color: #FFFFFF;
  border-radius: 30px 30px 0px 0px;
`;
