import styled from 'styled-components';

const selectColor = type => {
  switch(type) {
    case 'pending': return '#FF6B00';
    case 'canceled': return '#EF0C35';
    case 'realized': return '#1EAC79';
    case 'pink': return 'linear-gradient(93.05deg, #FF00C7 0%, #FF005C 100%)';
    case 'blue': return 'linear-gradient(93.05deg, #00A3FF 0%, #0057FF 100%)';
    default: return '#1EAC79';
  };
};

export const PatientInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 96px;
  padding: 16px;
  border-radius: 6px;
  background-color: #FFF;
  border: 1px solid #EFF2F9;
  margin-bottom: 8px;
  &:nth-last-child(1) {
    margin-bottom: 16px;
  }
`;

export const PatientPhotoContainer = styled.div`
  width: 64px;
  height: 64px;
  margin-right: 16px;
  border-radius: 6px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background: url(${props => props.img}), #EFF2F9;
`;

export const PatientData = styled.div`
  display: flex;
  min-width: 270px;
  padding-right: 32px;
  flex-direction: column;
  border-right: 1px solid #EFF2F9;
`;

export const PatientDiagnostic = styled.div`
  font-family: 'Poppins-SemiBold';
  font-size: 12px;
  line-height: 16px;
  font-style: normal;
  color: #1EAC79;
`;

export const PatientName = styled.div`
  font-family: 'OpenSans-Bold';
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  color: #303B5B;
`;

export const StaticText = styled.div`
  font-family: 'OpenSans-ExtraBold';
  font-size: 10px;
  line-height: 10px;
  font-style: normal;
  color: rgba(48, 59, 91, 0.3);
  text-transform: uppercase;
  margin: 8px 0;
`;

export const TestData = styled.div`
  padding: 0 16px;
  border-right: 1px solid #EFF2F9;
  display: flex;
  flex-direction: column;
  color: ${props => selectColor(props.color)};
`;

export const TestQty = styled.div`
  font-family: 'Poppins-Bold';
  font-size: 36px;
  line-height: 32px;
  font-style: normal;
  letter-spacing: 1px;
  margin-bottom: 8px;
`;

export const TestDesc = styled.div`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  line-height: 24px;
  font-style: normal;
`;

export const PatientActions = styled.div`
  display: flex;
  align-self: center;
  justify-self: end;
`;

export const EditButtonCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: #145AD2;
  cursor: pointer;
  margin-right: 16px;
  border-radius: 16px;
  background-color: #FFF;
  border: 1px solid #EFF2F9;
  & svg {
    width: 16px;
    height: 16px;
  }
`;

export const EditButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'OpenSans-Bold';
  font-size: 10px;
  line-height: 10px;
  font-style: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #FFF;
  height: 32px;
  min-width: 144px;
  margin-right: 16px;
  border-radius: 16px;
  background: ${props => selectColor(props.color)};
  cursor: pointer;
`;
