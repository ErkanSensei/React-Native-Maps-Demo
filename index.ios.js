import React, { Component } from 'react'
import {
  AppRegistry,
  Navigator,
} from 'react-native'
import Home from './screens/Home.js'

class ReactNativeMapsDemo extends Component { //eslint-disable-line
  constructor(props) {
    super(props)
    this.state = {
      change: 0,
      searchedCountries: [],
    }
  }
  renderScene(route, navigator) {
    const Component2 = route.component
    return (
      <Component2
        navigator={navigator}
        route={route}
      />
    )
  }
  render() {
    return (
      <Navigator
        renderScene={this.renderScene}
        initialRoute={{
          component: Home,
          navigator: { navigator }
        }}
      />
    )
  }
}

AppRegistry.registerComponent('ReactNativeMapsDemo', () => ReactNativeMapsDemo)
