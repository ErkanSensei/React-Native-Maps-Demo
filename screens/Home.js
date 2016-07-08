import React, { Component } from 'react'
import { Container, Header, Content, Title, Button, Icon } from 'native-base'
import {
  StyleSheet,
} from 'react-native'

import MapBox from 'react-native-mapbox-gl'
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
          <Title>MapBox Demo</Title>
        </Header>
        <Content>
          <MapBox
            style = {styles.container}
            accessToken =
            "pk.eyJ1IjoiZXJrYW50ZXN0IiwiYSI6ImNpcWQ5bGJiajAyZWxmbG0xNmJrdTMxaWIifQ.GHe3OIDoev9fVbHsREiwkA" //eslint-disable-line
          />
        </Content>
      </Container>
    )
  }
}

module.exports = Home
