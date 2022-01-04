import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx';
import { UserProvider } from './context/UserContext.jsx';
import Home from './views/Home/Home.jsx';
import Layout from './views/Layout/Layout.jsx';
import SignIn from './views/SignIn/SignIn.jsx';

export default function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Layout>
            <Route path='/signin'>
              <SignIn />
            </Route>
            <ProtectedRoute exact path='/'>
              <Home />
            </ProtectedRoute>
          </Layout>
        </Switch>
      </Router>
    </UserProvider>
  )
}
