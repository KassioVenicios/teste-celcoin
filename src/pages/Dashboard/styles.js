import styled from 'styled-components';

export const SectionLine = styled.div`
  display: flex;
`;

export const Section = styled.div`
  margin-bottom: 56px;
  &.size3-4 {
    flex-grow: 1;
  }
  &.size1-4 {
    margin-left: 16px;
    width: calc(100%/4 - 3*4px);
  }
`;

export const SectionCard = styled.div`
  height: 320px;
  padding: 16px;
  background: #FFF;
  border-radius: 6px;
  box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.08);
`;

export const SectionTitle = styled.h1`
  /* font-family: Poppins; */
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  color: #303B5B;
  align-items: center;
  margin: 0;
  margin-bottom: 24px;
`;

export const SectionTitleButton = styled.span`
  /* font-family: 'Open Sans'; */
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #FFF;
  width: 104px;
  height: 24px;
  margin-left: 8px;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(93.05deg, #00A3FF 0%, #0057FF 100%);
`;

export const CardsList = styled.div`
  display: flex;
  max-width: 100%;
`;
