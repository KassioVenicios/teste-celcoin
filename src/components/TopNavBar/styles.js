import styled from 'styled-components';
import appsIcon from '../../assets/images/apps-icon.svg';

export const TopNavBarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 16px 32px;
  border-radius: 30px 30px 0px 0px;
`;

export const LeftSide = styled.div`
  position: relative;
`;

export const IconContainer = styled.div`
  width: 20px;
  height: 20px;
  color: #2C2E3D;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    top: 4px;
    right: 3px;
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background-color: #FF001F;
    visibility: ${props => !! props.active ? 'visible' : 'hidden'};
  }
`;

export const IconSearchContainer = styled(IconContainer)`
  position: absolute;
  top: 10px;
  left: 10px;
  color: #787686;
  cursor: default;
`;

export const Search = styled.input`
  height: 40px;
  width: 400px;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 10px;
  padding-left: 40px;
  background-color: #F5F5F5;
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-left: 20px;
  }
`;

export const AppsIcon = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-image: url(${appsIcon});
`;
