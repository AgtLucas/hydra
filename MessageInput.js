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

class MessageInput extends Component {
  state = {
    text: ''
  }

  _handleSubmission = async () => {
    try {
      let result = await this.props.mutate({variables: {text: this.state.text}})
      this.setState({text: ''})
      this.props.onNewMessage()
    } catch (e) {
      alert(e.message)
    }
  }

  render() {
    return (
      <TextInput
        onChangeText={text => this.setState({text})}
        onSubmitEditing={this._handleSubmission}
        placeholder='Leave a message'
        style={styles.messageInput}
        value={this.state.text}
        returnKeyType='send'/>
    )
  }
}
