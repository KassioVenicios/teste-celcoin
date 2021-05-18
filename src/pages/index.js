import { Provider } from 'react-redux';
import store from '../store';
import SideMenu from '../components/SideMenu';
import {
  AppContainer,
  ContentContainer,
  SideMenuContainer,
  TopNavBarContainer
} from './styles';

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <SideMenuContainer>
          <SideMenu>
            
          </SideMenu>
        </SideMenuContainer>
        <ContentContainer>
          <TopNavBarContainer>
            
          </TopNavBarContainer>
        </ContentContainer>
      </AppContainer>
    </Provider>
  );
}

export default App;
