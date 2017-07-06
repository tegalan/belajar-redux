import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Name extends Component {
    render() {
        return(
            <View style={{ margin: 4,padding: 4, backgroundColor: '#fefecd'}}>
                <Text style={{ padding: 4, fontSize: 18 }}>{ this.props.name }</Text>
                <View style={{ flexDirection:'row' }}>
                    <Text style={{ flex:1, padding: 4 }}>{ `Age ${this.props.age}` }</Text>
                    <Text style={{ flex:1, padding: 4 }}>{ `From ${this.props.address}` }</Text>
                </View>
            </View>
        )
    }
}

export default Name