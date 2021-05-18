import styled from 'styled-components';

export const UserMenuSuspendedContent = styled.div`
  position: absolute;
  left: 0;
  bottom: calc(-144px - 8px);
  flex-direction: column;
  width: 152px;
  height: 144px;
  border-radius: 8px;
  background-color: #FFF;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
  opacity: ${props => !! props.opened ? 1 : 0};
  z-index: ${props => !! props.opened ? 2 : -1};
  transition: .8s;
`;

export const UserMenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  &:nth-last-child(1) {
    border-bottom: none;
  }
`;

export const UserMenuItemText = styled.span`
  /* font-family: Poppins; */
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #303B5A;
`;

export const IconContainer = styled.span`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #EF0C35;
  margin-right: 8px;
`;