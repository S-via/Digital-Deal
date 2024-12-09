import { Outlet } from 'react-router-dom'
import './App.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import Nav from './components/Nav';

function App() {

  return (
    <>
    
      <Nav/>
      <Outlet />
    
    </>
  )
}

export default App
