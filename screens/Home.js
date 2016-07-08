import React, { Component } from 'react'
import { Container, Header, Content, Title, Button, Icon } from 'native-base'
import {
  StyleSheet,
} from 'react-native'

import Google from './Google.js'
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c12626',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#000',
    margin: 10,
    justifyContent: 'center'
  }
})

class Home extends Component { //eslint-disable-line

  render() {
    return (
      <Container>
        <Header style = {styles.container}>
          <Title>Maps Demo</Title>
        </Header>
        <Content>
          <Button block success
            style = {styles.button}
            onPress = {() => {
              this.props.navigator.push({ //eslint-disable-line
                navigator: this.props.navigator, //eslint-disable-line
                component: Google
              })
            }}
          >
            <Icon name = "logo-google" />
          </Button>
        </Content>
      </Container>
    )
  }
}

module.exports = Home
