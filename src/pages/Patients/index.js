import { Provider } from 'react-redux';
import patientsStore from '../../store/patients';
import attendanceHistoricStore from '../../store/attendanceHistoric';
import AttendanceHistoricList from '../../components/AttendanceHistoricList';
import PatientsCard from '../../components/PatientsCard';
import {
  Section,
  SectionCard,
  SectionTitle,
} from './styles';

function Patients() {

  return (
    <div>
      <Section>
        <Provider store={attendanceHistoricStore}>
          <SectionTitle>Atualizações de pacientes</SectionTitle>
          <SectionCard className='hoverable'>
            <AttendanceHistoricList isHistoric={false} />
          </SectionCard>
        </Provider>
      </Section>

      <Section className='margin-16'>
        <Provider store={patientsStore}>
          <SectionTitle>Todos os pacientes</SectionTitle>
          <SectionCard className='padding-16'>
            <PatientsCard />
          </SectionCard>
        </Provider>
      </Section>
    </div>
  );
}

export default Patients;
