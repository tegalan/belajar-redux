import React, {Component} from 'react'
import { connect } from 'react-redux'
import {
    View, TextInput, Text, Button
} from 'react-native'

import { namesAddData } from '../actions/names'

class InputName extends Component {

    constructor(){
        super()

        this.state = {
            name:'',
            age:'',
            address:''
        }
    }

    saveData() {
        this.props.addData({...this.state})
    }

    render() {
        return(
            <View style={{padding: 4}}>
                <TextInput placeholder="Name" 
                    autoCapitalize="words" 
                    value={this.state.name}
                    onChangeText={(text) => this.setState({name: text})}/>
                <View style={{flexDirection:'row'}}>

                    <TextInput placeholder="Age" 
                        style={{width: 50}} 
                        keyboardType="numeric" 
                        value={this.state.age}
                        onChangeText={(text) => this.setState({age: text})}/>

                    <TextInput placeholder="Address" 
                        style={{flex:1}}
                        autoCapitalize="words" 
                        value={this.state.address}
                        onChangeText={(text) => this.setState({address: text})}/>
                
                </View>
                <Button title="Save" onPress={ this.saveData.bind(this) }/>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addData: (name) => dispatch(namesAddData(name))
    }
}

export default connect(null,mapDispatchToProps)(InputName)