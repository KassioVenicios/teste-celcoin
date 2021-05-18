import { Provider } from 'react-redux';
import patientsStore from '../../store/patients';
import attendanceHistoricStore from '../../store/attendanceHistoric';
import AttendanceHistoricList from '../../components/AttendanceHistoricList';
import {
  Section,
  SectionCard,
  SectionTitle,
} from './styles';

function Patients() {

  return (
    <>
      <Section>
        <Provider store={attendanceHistoricStore}>
          <SectionTitle>Atualizações de pacientes</SectionTitle>
          <SectionCard>
            <AttendanceHistoricList isHistoric={false} />
          </SectionCard>
        </Provider>
      </Section>

      <Section>
        <Provider store={patientsStore}>
          <SectionTitle>Todos os pacientes</SectionTitle>
          <SectionCard>
            
          </SectionCard>
        </Provider>
      </Section>
    </>
  );
}

export default Patients;
