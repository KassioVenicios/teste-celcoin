import { useSelector } from 'react-redux';
import PatientInfo from '../PatientInfo';
import PerfectScrollBar from 'react-perfect-scrollbar';
import {
  PatientsListContainer,
} from './styles';

function PatientsList() {

  const patients = useSelector(state => state.patients);

  return (
    <PatientsListContainer>
      <PerfectScrollBar>
        {
          patients.map(item => <PatientInfo key={item.id} patient={item} />)
        }
      </PerfectScrollBar>
    </PatientsListContainer>
  );
}

export default PatientsList;
