import styled from 'styled-components';

export const PatientsHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.span`
  /* font-family: Poppins; */
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 40px;
  margin-right: 8px;
  font-weight: bold;
  font-style: normal;
  color: rgba(86, 84, 104, 0.6);
`;

export const LeftSide = styled.div`
  display: flex;
`;

export const Search = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  height: 40px;
  width: 400px;
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 5px;
  padding-left: 40px;
  background-color: #F5F5F5;
`;

export const IconSearchContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  color: #787686;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RightSide = styled.div`
  display: flex;
`;

export const IconContainer = styled.div`
  color: #787686;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  & svg {
    width: 28px;
    height: 28px;
  }
`;
