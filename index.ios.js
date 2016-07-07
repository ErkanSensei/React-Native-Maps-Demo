import React, {} from 'react'
import { Container, Header, Content, Footer, Title, Button } from 'native-base'
import {
  AppRegistry,
  StyleSheet,
  Alert,
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
})

const ReactNativeMapsDemo = () => { //eslint-disable-line
  return (
      <Container>
        <Header style = {styles.container}>
          <Title>Maps Demo</Title>
        </Header>
        <Content>
          <Button block onPress = {() => Alert.alert('Hello!')}> Click me </Button>
        </Content>

      </Container>
    )
}

AppRegistry.registerComponent('ReactNativeMapsDemo', () => ReactNativeMapsDemo)
