import styled from 'styled-components';
import bxTestTubeOk from '../../assets/images/bx-test-tube-ok.svg';
import bxTestTubeX from '../../assets/images/bx-test-tube-x.svg';

function getCustomIcon(icon) {
  switch(icon) {
    case 'bx-test-tube-ok': return bxTestTubeOk;
    case 'bx-test-tube-x': return bxTestTubeX;
    default: return bxTestTubeOk;
  }
}

export const Card = styled.div`
  display: inline-block;
  height: 176px;
  width: calc(100%/4 - 3*4px);
  margin-right: 16px;
  position: relative;

  &:nth-last-child(1) {
    margin-right: 0;
  }

  &:before {
    content: '';
    position: absolute;
    top: 12px;
    right: 16px;
    width: 80%;
    height: 172px;
    border-radius: 6px;
    background-color: #FFF;
    box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.08);
  }
`;

export const CardContainer = styled.div`
  position: relative;
  border-radius: 6px;
  background-color: #FFF;
  padding: 16px 24px 32px 16px;
  box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.08);
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-bottom: 24px;
  color: ${props => props.color};
  & svg {
    width: 26.67px;
    height: 26.67px;
  }
`;

export const CustomIcon = styled.div`
  width: 26.67px;
  height: 26.67px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${props => getCustomIcon(props.icon)});
`;

export const CardData = styled.h2`
  /* font-family: Poppins; */
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 32px;
  letter-spacing: 1px;
  margin: 0;
  margin-bottom: 8px;
  color: #303B5B;
`;

export const CardTitle = styled.h3`
  /* font-family: Poppins; */
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #303B5B;
  margin: 0;
`;

export const CardVariance = styled.span`
  float: right;
  /* font-family: Poppins; */
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;
  padding: 8px;
  width: 56px;
  height: 24px;
  margin-top: 8px;
  border-radius: 12px;
  background-color: ${props => props.data >= 0 ? '#1CBF84' : '#EF0C35'};
`;
