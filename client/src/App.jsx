import { Outlet } from 'react-router-dom'
import './App.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import Header from './components/header';

function App() {

  return (
    <>
    
    <Header/>
      <Outlet />
    </>
  )
}

export default App
