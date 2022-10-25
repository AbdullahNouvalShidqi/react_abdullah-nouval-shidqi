import './App.css';
import Home from './component/Home';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import CONST from './utils/constants';

const client = new ApolloClient({
  uri: CONST.GRAPHQL_BASE_URL,
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret': CONST.HASURA_CLIENT_SECRET
  }
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Home />
      </div>
    </ApolloProvider>
  );
}

export default App;
