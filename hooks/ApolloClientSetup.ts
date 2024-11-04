// ApolloClientSetup.js
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'https://api-eu-west-2.hygraph.com/v2/cm2z88wqb015707usjr5au86h/master',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;