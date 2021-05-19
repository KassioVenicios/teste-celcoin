import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
  position: relative;

  &.mg-16 {
    margin-bottom: 16px;
  }
`;

export const SectionCard = styled.div`
  /* calc(
    + largura da janela
    - padding do body
    - largura do menu lateral
    - padding do container
    - padding do card)
  */
  max-width: calc(100vw - 64px - 248px - 72px - 16px);
  flex-grow: 1;
  background: #FFF;
  min-height: 320px;
  position: relative;
  border-radius: 6px;
  transition: .5s ease-in-out;
  box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.08);

  &.hoverable:hover {
    box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.3);
  }

  &.pd-r-16 {
    padding-right: 16px;
  }

  &.pd-b-16 {
    padding-bottom: 16px;
  }
`;

export const SectionTitle = styled.h1`
  font-family: 'Poppins-Bold';
  font-style: normal;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  color: #303B5B;
  align-items: center;
  margin: 0;
  margin-bottom: 24px;
`;
