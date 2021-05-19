import styled from 'styled-components';
import { getCustomIcon } from '../../utils/iconify-icons';

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
    bottom: -8px;
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
  transition: .5s ease-in-out;

  &:hover {
    box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.3);
  }
`;

export const CardHover = styled.div`
  position: absolute;
  right: 16px;
  top: -48px;
  height: 80px;
  padding: 16px;
  background: #FFF;
  border-radius: 8px;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  opacity: ${props => !! props.opened ? 1 : 0};
  z-index: ${props => !! props.opened ? 2 : -1};
  transition: .5s ease-in-out;
`;

export const CardHoverTitle = styled.span`
  font-family: 'Poppins-Bold';
  font-style: normal;
  font-size: 12px;
  line-height: 16px;
  padding-bottom: 8px;
  color: #303B5A;
`;

export const CardHoverData = styled.span`
  font-family: 'Poppins-Bold';
  font-style: normal;
  font-size: 22px;
  line-height: 24px;
  color: ${props => props.color};
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
  font-family: 'Poppins-Bold';
  font-style: normal;
  font-size: 36px;
  line-height: 32px;
  letter-spacing: 1px;
  margin: 0;
  margin-bottom: 8px;
  color: #303B5B;
`;

export const CardTitle = styled.h3`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  color: #303B5B;
  margin: 0;
`;

export const CardVariance = styled.span`
  float: right;
  font-family: 'Poppins-Bold';
  font-style: normal;
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
