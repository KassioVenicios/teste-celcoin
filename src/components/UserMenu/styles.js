import styled from 'styled-components';
import manPhoto from '../../assets/images/man.png';

export const UserMenuContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  height: 56px;
  padding: 8px;
  padding-left: 14px;
  border-radius: 50px;
  background-color: rgba(47, 68, 134, 0.05);
  cursor: pointer;
`;

export const UserName = styled.span`
  font-family: 'OpenSans-Regular';
  font-style: normal;
  font-size: 14px;
  line-height: 19px;
  color: rgba(86, 84, 104, 0.8);
`;

export const UserNameBold = styled(UserName)`
  font-weight: bolder;
`;

export const UserPhoto = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-image: url(${manPhoto});
`;
