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

export const Items = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

export const ItemActiveBackground = styled.div`
  position: absolute;
  top: ${props => parseInt(props.index * 72 + 8) + 'px'};
  left: 0;
  width: 100%;
  height: 56px;
  background-color: #EFF2F9;
  border-radius: 30px 0 0 30px;
  transition: top .8s;

  &:before {
    content: '';
    position: absolute;
    top: -24px;
    right: 0;
    width: 24px;
    height: 24px;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><path fill="%23EFF2F9" d="M0 24 Q24 24 24 0 L24 24Z" /></svg>');
  }
  &:after {
    content: '';
    position: absolute;
    bottom: -24px;
    right: 0;
    width: 24px;
    height: 24px;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><path fill="%23EFF2F9" d="M0 0 Q24 0 24 24 L24 0ZZ" /></svg>');
  }
`;
