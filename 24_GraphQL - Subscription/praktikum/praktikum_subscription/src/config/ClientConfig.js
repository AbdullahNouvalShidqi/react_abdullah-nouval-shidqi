import CONST from "../utils/constants";
import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from "@apollo/client/utilities";

const wsLink = new WebSocketLink({
  uri: CONST.GRAPHQL_WSLINK,
  options: {
    reconnect: true,
    connectionParams:{
      headers: {
        'x-hasura-admin-secret': CONST.HASURA_CLIENT_SECRET
      } 
    }
  },
})

const httpLink = new HttpLink({
  uri: CONST.GRAPHQL_BASE_URL,
  headers: {
    'x-hasura-admin-secret': CONST.HASURA_CLIENT_SECRET
  }
})

const splitLink = split(
  ({query}) =>{
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  httpLink,
)

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
})

export default client;