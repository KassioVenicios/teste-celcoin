import { Provider } from 'react-redux';
import store from '../store';
import SideMenu from '../components/SideMenu';
import TopNavBar from '../components/TopNavBar';
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
          <SideMenu />
        </SideMenuContainer>
        <ContentContainer>
          <TopNavBarContainer>
            <TopNavBar />
          </TopNavBarContainer>
        </ContentContainer>
      </AppContainer>
    </Provider>
  );
}

export default App;
