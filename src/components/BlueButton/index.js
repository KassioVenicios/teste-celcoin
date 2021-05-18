import {
  BlueButtonContainer
} from './styles';

function BlueButton(props) {
  return (
    <BlueButtonContainer>
      {props.children}
    </BlueButtonContainer>
  );
}

export default BlueButton;
