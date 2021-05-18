import { useSelector } from 'react-redux';
import BlueButton from '../BlueButton';
import {
  CustomIcon,
  Footer,
  IconContainer,
  Subtitle,
  TestName,
  TestData,
} from './styles';

function MostPerformedTest() {

  const Test = useSelector(state => state.mostPerformedTest);

  return (
    <>
      <IconContainer>
        <CustomIcon icon={Test.icon} />
      </IconContainer>
      <TestName>{Test.name}</TestName>
      <Subtitle>Licenças Disponíveis</Subtitle>
      <Footer>
        <TestData>{Test.data}</TestData>
        <BlueButton>Comprar Mais</BlueButton>
      </Footer>
    </>
  );
}

export default MostPerformedTest;
