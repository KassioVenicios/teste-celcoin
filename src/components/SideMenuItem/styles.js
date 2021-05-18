import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${props => !! props.active ? '#303B5B' : '#FFF' };
  padding: 24px 0;
  padding-left: 23px;
  cursor: pointer;
  transition: color 0.4s;
`;

export const IconContainer = styled.span`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.span`
  display: flex;
  padding-left: 15px;
  align-items: center;
  justify-content: space-between;
  /* font-family: Poppins; */
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1px;
  z-index: 1;
`;
