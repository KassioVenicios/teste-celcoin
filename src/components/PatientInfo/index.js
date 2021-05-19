import Icon from '@iconify/react';
import { getIcon } from '../../utils/iconify-icons';
import {
  EditButtonCircle,
  EditButton,
  PatientActions,
  PatientData,
  PatientDiagnostic,
  PatientInfoContainer,
  PatientName,
  PatientPhotoContainer,
  StaticText,
  TestData,
  TestQty,
  TestDesc,
} from './styles';

function PatientInfo({ patient }) {

  return (
    <PatientInfoContainer>
      <div style={{display: 'flex'}}>
        <PatientPhotoContainer img={patient.photo} />
        <PatientData>
          <PatientName>{patient.name}</PatientName>
          <StaticText>Diagnóstico</StaticText>
          <PatientDiagnostic>{patient.diagnostic}</PatientDiagnostic>
        </PatientData>
        <TestData color={'realized'}>
          <TestQty>{patient.realizedTests}</TestQty>
          <TestDesc>Testes realizados</TestDesc>
        </TestData>
        <TestData color={'canceled'}>
          <TestQty>{patient.canceledTests}</TestQty>
          <TestDesc>Testes cancelados</TestDesc>
        </TestData>
        <TestData color={'pending'}>
          <TestQty>{patient.pendingTests}</TestQty>
          <TestDesc>Testes pendentes</TestDesc>
        </TestData>
      </div>
      <PatientActions>
        <EditButtonCircle>
          <Icon icon={getIcon('edit-filled')} />
        </EditButtonCircle>
        <EditButton color='pink'>Enviar novo teste</EditButton>
        <EditButton color='blue'>Alterar cadastro</EditButton>
      </PatientActions>
    </PatientInfoContainer>
  );
}

export default PatientInfo;
