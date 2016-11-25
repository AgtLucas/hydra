import React, { Component } from 'react'
import {
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
} from 'react-native'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

@graphql(gql`
  mutation AddMessage($text: String!) {
    createMessage(input: { text: $text }) {
      changedMessage {
        text
      }
    }
  }
`)
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
        returnKeyType='send'
      />
    )
  }
}

const styles = StyleSheet.create({
  messageInput: {
    backgroundColor: '#FFF',
    height: 50,
    width: Dimensions.get('window').width,
    borderWidth: 1,
    borderColor: '#EEE',
    paddingHorizontal: 10,
  }
})

export default MessageInput
