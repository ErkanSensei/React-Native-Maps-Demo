import React, { Component } from 'react'
import { Container, Header, Content, Title, Button, Icon } from 'native-base'
import {
  StyleSheet,
} from 'react-native'
import Home from './Home.js'

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

class Google extends Component { //eslint-disable-line
  render() {
    return (
      <Container>
        <Header style = {styles.container}>
          <Button transparent
            onPress = {() => {
              this.props.navigator.popToTop()
            }}
          >
            <Icon name = "md-menu" />
          </Button>
          <Title>Maps Demo</Title>
        </Header>
        <Content>
          <Button block success style = {styles.button}> <Icon name = "logo-google" /> </Button>
        </Content>
      </Container>
    )
  }
}
module.exports = Google
