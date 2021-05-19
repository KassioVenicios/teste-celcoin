import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
  position: relative;

  &.margin-16 {
    margin-bottom: 16px;
  }
`;

export const SectionCard = styled.div`
  width: 100%;
  flex-grow: 1;
  padding: 16px;
  background: #FFF;
  min-height: 320px;
  position: relative;
  border-radius: 6px;
  transition: .5s ease-in-out;
  box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.08);

  &:hover {
    box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.3);
  }
`;

export const SectionTitle = styled.h1`
  font-family: Poppins;
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
