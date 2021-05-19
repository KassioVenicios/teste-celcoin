import styled from 'styled-components';

export const NewsContainer = styled.div`
  display: flex;
  padding: 16px;
  margin-right: 16px;
  border-radius: 6px;
  width: calc(100%/3);
  background-color: #FFF;
  border: 1px solid #EDF1F8;
  box-shadow: 0px 1px 26px rgba(71, 87, 122, 0.08);

  &:nth-last-child(1) {
    margin-right: 0;
  }
`;

export const PatientPhoto = styled.div`
  min-width: 96px;
  height: 96px;
  border-radius: 6px;
  background: url(${props => props.photo}), #EFF2F9;
  background-repeat: no-repeat;
`;

export const NewsData = styled.div`
  display: flex;
  margin-left: 16px;
  flex-direction: column;
`;

export const StaticInfo = styled.span`
  font-family: 'Open Sans';
  font-size: 10px;
  font-weight: 800;
  line-height: 12px;
  font-style: normal;
  text-transform: uppercase;
  color: rgba(48, 59, 91, 0.3);
`;

export const PatientName = styled.span`
  font-family: 'Open Sans';
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;
  font-style: normal;
  color: #303B5B;
  margin: 8px 0;
`;

export const NewsTitle = styled.span`
  font-family: 'Open Sans';
  font-size: 12px;
  line-height: 16px;
  font-style: normal;
  font-weight: normal;
  text-transform: uppercase;
  margin-bottom: 16px;
  color: ${props => props.isCompleted ? '#1EAC79' : '#EF0C35'};
`;

export const NewsDescription = styled(NewsTitle)`
  font-weight: bold;
  padding-left: 5px;
`;
