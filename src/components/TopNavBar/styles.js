import styled from 'styled-components';

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
  position: absolute;
  top: 10px;
  left: 10px;
  width: 20px;
  height: 20px;
  color: #787686;
  display: flex;
  align-items: center;
  justify-content: center;
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

`;
