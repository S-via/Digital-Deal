import {Outlet} from 'react-router-dom'
import './App.css'
import { 
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client'
import {setContext} from '@apollo/client/link/context'


function App() {

  return (
    <>
      <Outlet/>
    </>
  )
}

export default App
