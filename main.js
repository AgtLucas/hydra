import Exponent from 'exponent'
import React, { Component } from 'react'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

import App from './App'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://rare-molybdenum-506.myreindex.com/graphql'
  })
})

class AppContainer extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    )
  }
}

Exponent.registerRootComponent(AppContainer)
