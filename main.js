import Exponent from 'exponent'
import React from 'react'
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

class App extends React.Component {
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
