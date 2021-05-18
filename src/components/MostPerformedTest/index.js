import { useSelector } from 'react-redux';
import {
  BuyMoreButton,
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
        <BuyMoreButton>Comprar Mais</BuyMoreButton>
      </Footer>
    </>
  );
}

export default MostPerformedTest;
