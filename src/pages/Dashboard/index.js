import { Provider, useSelector } from 'react-redux';
import newsStore from '../../store/news';
import mostPerformedTestStore from '../../store/mostperformedtest';
import attendanceHistoricStore from '../../store/attendanceHistoric';
import InfoCard from '../../components/InfoCard';
import MostPerformedTest from '../../components/MostPerformedTest';
import BlueButton from '../../components/BlueButton';
import AttendanceHistoricList from '../../components/AttendanceHistoricList';
import NewsList from '../../components/NewsList';
import {
  CardsList,
  Section,
  SectionCard,
  SectionLine,
  SectionTitle,
} from './styles';

function Dashboard() {

  const Info = useSelector(state => state.info);

  return (
    <>
      <Section>
        <SectionTitle>Informações Gerais</SectionTitle>
        <CardsList>
          {
            Info.map(item => <InfoCard key={item.id} item={item} />)
          }
        </CardsList>
      </Section>
      <SectionLine>
        <Section className='size3-4'>
          <Provider store={attendanceHistoricStore}>
            <SectionTitle>
              Histórico de atendimentos
              <span style={{ marginRight: '16px' }}/>
              <BlueButton>ver todos</BlueButton>
            </SectionTitle>
            <SectionCard>
              <AttendanceHistoricList isHistoric={true} />
            </SectionCard>
          </Provider>
        </Section>
        <Section className='size1-4'>
          <Provider store={mostPerformedTestStore}>
            <SectionTitle>Teste mais realizado</SectionTitle>
            <SectionCard className='effect'>
              <MostPerformedTest />
            </SectionCard>
          </Provider>
        </Section>
      </SectionLine>
      <Section className='margin-16'>
        <SectionTitle>Atualizações importantes</SectionTitle>
        <Provider store={newsStore}>
          <NewsList />
        </Provider>
      </Section>
    </>
  );
}

export default Dashboard;
