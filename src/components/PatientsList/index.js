import { useSelector } from 'react-redux';
import PatientInfo from '../PatientInfo';
import {
  PatientsListContainer,
} from './styles';

function PatientsList() {

  const patients = useSelector(state => state.patients);

  return (
    <PatientsListContainer>
      {
        patients.map(item => <PatientInfo key={item.id} patient={item} />)
      }
    </PatientsListContainer>
  );
}

export default PatientsList;
