import { useSelector } from 'react-redux';
import InfoCard from '../../components/InfoCard';
import {
  CardsList,
  Section,
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
      <Section>
        <SectionTitle>
          Histórico de atendimentos
          <SectionTitleButton>ver todos</SectionTitleButton>
        </SectionTitle>
      </Section>
    </>
  );
}

export default Dashboard;
