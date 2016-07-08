import React, {} from 'react'
import { Container, Header, Content, Title, Button, Icon } from 'native-base'
import {
  AppRegistry,
  StyleSheet,
} from 'react-native'

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

const ReactNativeMapsDemo = () => { //eslint-disable-line
  return (
      <Container>
        <Header style = {styles.container}>
          <Button transparent>
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

AppRegistry.registerComponent('ReactNativeMapsDemo', () => ReactNativeMapsDemo)
