import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';
import MenuStore from '../store/menus';
import InfoStore from '../store/generalinfo';
import SideMenu from '../components/SideMenu';
import TopNavBar from '../components/TopNavBar';
import AppRoutes from '../routes';
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
        <Router>

        <SideMenuContainer>
          <SideMenu />
        </SideMenuContainer>

        <ContentContainer>

          <TopNavBarContainer>
            <TopNavBar />
          </TopNavBarContainer>

          <PerfectScrollbar className='scroll-page'>
            <PageContainer>
              <Provider store={InfoStore}>
                <AppRoutes />
              </Provider>
            </PageContainer>
          </PerfectScrollbar>

        </ContentContainer>

        </Router>
      </AppContainer>
    </Provider>
  );
}

export default App;
