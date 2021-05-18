import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';

export const Header = styled.div`
  display: flex;
  height: 40px;
  margin: 24px 32px 23px 8px;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  width: 32px;
  height: 32px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${logo});
`;

export const HeaderTitle = styled.span`
  /* font-family: Poppins; */
  margin: 0;
  color: #FFF;
  font-size: 26px;
  font-weight: 400;
  line-height: 40px;
  font-style: normal;
  text-align: center;
  letter-spacing: 1px;
  display: inline-block;
  flex-grow: 1;
  text-align: center;
`;

export const HeaderTitleBold = styled(HeaderTitle)`
  font-weight: 900;
`;

export const LineDivisor = styled.div`
  height: 1px;
  margin-right: 24px;
  background-color: rgba(255, 255, 255, 0.1);
`;
