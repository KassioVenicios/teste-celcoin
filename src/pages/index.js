import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import MenuStore from '../store/menus';
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
        <Router>

          <SideMenuContainer>
            <SideMenu />
          </SideMenuContainer>

          <ContentContainer>

            <TopNavBarContainer>
              <TopNavBar />
            </TopNavBarContainer>

            <PageContainer>
              <Provider store={InfoStore}>
                <Switch>
                  <Route exact path='/'>
                    <Dashboard />
                  </Route>
                </Switch>
                <Switch>
                  <Route exact path='/pacientes'>
                    <Patients />
                  </Route>
                </Switch>
              </Provider>
            </PageContainer>

          </ContentContainer>

        </Router>
      </AppContainer>
    </Provider>
  );
}

export default App;
