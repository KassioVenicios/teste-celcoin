import styled from 'styled-components';

export const SectionLine = styled.div`
  display: flex;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
  &.size3-4 {
    flex-grow: 1;
  }
  &.size1-4 {
    margin-left: 16px;
    width: calc(100%/4 - 3*4px);
  }
  &.margin-16 {
    margin-bottom: 16px;
  }
`;

export const SectionCard = styled.div`
  flex-grow: 1;
  min-height: 320px;
  padding: 16px;
  background: #FFF;
  border-radius: 6px;
  box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.08);
  transition: .5s ease-in-out;

  &:hover {
    box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.3);
  }
  &.effect:hover {
    /* border: 1px solid; */
    /* border-image-source: radial-gradient(83.28% 83.28% at 46.47% 41.25%, #F70186 0%, rgba(246, 1, 143, 0) 100%); */
    box-shadow: 0px 1px 26px rgba(71, 87, 122, 0.08);
    filter: drop-shadow(0px 8px 26px rgba(71, 87, 122, 0.3));
    background: linear-gradient(42.45deg, #FFF 13.8%, rgba(255, 255, 255, 0) 93.21%);
  }
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

export const CardsList = styled.div`
  display: flex;
  max-width: 100%;
`;
