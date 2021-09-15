import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Router from './src/Router'

export default class App extends Component {
  render() {
    return <View style={{flex:1}}>
      <Router/>
    </View>
  }
}
