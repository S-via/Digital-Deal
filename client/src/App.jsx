import { Outlet } from 'react-router-dom'
import './App.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
feature/linking-pages

import Nav from './components/Nav';

const httpLink = createHttpLink({
  uri: '/graphql',
});
import Header from './components/header';
const authLink = setContext((_, { headers }) => {
 const token = localStorage.getItem('id_token');
 return {
   headers: {
     ...headers,
     authorization: token ? `Bearer ${token}` : '',
   },
 };
});

 feature/app.jsx
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {

  return (
feature/linking-pages
    <>
    
      <Nav/>

    <ApolloProvider client={client}>
    <Header/>

      <Outlet />
    </ApolloProvider>

  )
}

export default App
