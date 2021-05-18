import { Provider, useSelector } from 'react-redux';
import store from '../../store/mostperformedtest';
import InfoCard from '../../components/InfoCard';
import MostPerformedTest from '../../components/MostPerformedTest';
import {
  CardsList,
  Section,
  SectionCard,
  SectionLine,
  SectionTitle,
  SectionTitleButton,
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
          <SectionTitle>
            Histórico de atendimentos
            <SectionTitleButton>ver todos</SectionTitleButton>
          </SectionTitle>
          <SectionCard>

          </SectionCard>
        </Section>
        <Section className='size1-4'>
          <Provider store={store}>
            <SectionTitle>Teste mais realizado</SectionTitle>
            <SectionCard>
              <MostPerformedTest />
            </SectionCard>
          </Provider>
        </Section>
      </SectionLine>
    </>
  );
}

export default Dashboard;
