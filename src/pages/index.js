import { Provider } from 'react-redux';
import MenuStore from '../store';
import InfoStore from '../store/generalinfo';
import SideMenu from '../components/SideMenu';
import TopNavBar from '../components/TopNavBar';
import Dashboard from './Dashboard';
import Patients from './Patients';
import {
  AppContainer,
  ContentContainer,
  PageContainer,
  SideMenuContainer,
  TopNavBarContainer,
} from './styles';

function App() {
  return (
    <Provider store={MenuStore}>
      <AppContainer>
        <SideMenuContainer>
          <SideMenu />
        </SideMenuContainer>
        <ContentContainer>
          <TopNavBarContainer>
            <TopNavBar />
          </TopNavBarContainer>
          <PageContainer>
            <Provider store={InfoStore}>
              <Dashboard />
              <Patients />
            </Provider>
          </PageContainer>
        </ContentContainer>
      </AppContainer>
    </Provider>
  );
}

export default App;
