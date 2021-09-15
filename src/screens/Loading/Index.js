import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Loading extends Component {
    componentDidMount() {
        this.props.navigation.navigate('Login');
    }
    
    render() {
        return (
            <View>
                <Text> Loading </Text>
            </View>
        )
    }
}
