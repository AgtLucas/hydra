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

import MessageInput from './MessageInput'

class App extends Component {
  render() {
    if (this.props.data.loading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size='large' />
        </View>
      )
    }

    let messages = this.props.data.viewer.allMessages.nodes

    return (
      <View style={styles.container}>
        <ScrollView
          keyboardDismissMode='on-drag'
          style={{flex: 1}}
          contentContainerStyle={{paddingTop: 30, paddingBottom: 50, paddingHorizontal: 10}}>
          {messages.map((message, i) => <Text key={i}>{message.text}</Text>)}
        </ScrollView>

        <KeyboardAvoidingView
          behavior='padding'
          style={{position: 'absolute', bottom: 0, left: 0, right: 0}}>
          <MessageInput onNewMessage={() => this.props.data.refetch()} />
        </KeyboardAvoidingView>

        <View style={styles.statusBarUnderlay} />
        <StatusBar barStyle='light-content' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  statusBarUnderlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: Exponent.Constants.statusBarHeight,
    backgroundColor: '#888'
  }
})

export default App
