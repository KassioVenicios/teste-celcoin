import {
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import {
  TransitionGroup,
  CSSTransition,
} from 'react-transition-group';
import Dashboard from '../pages/Dashboard';
import Patients from '../pages/Patients';

function AppRoutes() {

  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames='fade' timeout={800}>
        <>
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
        </>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default AppRoutes;
