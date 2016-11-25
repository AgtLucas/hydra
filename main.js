import Exponent from 'exponent'
import React, { Component } from 'react'
import {
  ActivityIndicator,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider, graphql } from 'react-apollo'
import gql from 'graphql-tag'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://rare-molybdenum-506.myreindex.com/graphql'
  })
})

class AppContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up main.js to start working on your app!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

Exponent.registerRootComponent(App)
