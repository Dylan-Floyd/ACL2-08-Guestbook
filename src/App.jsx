import { UserProvider } from './context/UserContext.jsx';
import Home from './views/Home/Home.jsx';
import Layout from './views/Layout/Layout.jsx';

export default function App() {
  return (
    <UserProvider>
      <Layout>
        <Home />
      </Layout>
    </UserProvider>
  )
}
