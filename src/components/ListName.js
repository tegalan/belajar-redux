import React, { Component } from 'react'
import { View, Text, Button, ScrollView } from 'react-native'

import Name from './Name'

class ListName extends Component {

    constructor() {
        super()

        this.state = {
            isLoading: false,
            hasError:false,
            names: [
                {
                    name: "Sucipto",
                    age: 24,
                    address: "Yogyakarta"
                },
                {
                    name: "Sule",
                    age: 35,
                    address: "Bandung"
                }
            ]
        }
    }

    componentDidMount(){

        this.fetchData()

    }

    addData() {
        fetch('http://593f16cebb5eb40011ddb733.mockapi.io/data',{
            method: 'POST'
        })
        .then((data) => this.fetchData() )
        .catch((error) => this.setState({hasError:true}))
    }

    fetchData(){

        this.setState({ isLoading:true })

        fetch('http://593f16cebb5eb40011ddb733.mockapi.io/data')
        .then((response) => response.json())
        .then((data) => this.setState({
            names: data,
            isLoading: false
        }))
        .catch((error) => this.setState({hasError:true}))
    }

    render() {

        if(this.state.isLoading){
            return(
                <View>
                    <Text>Loading...</Text>
                </View>
            )
        }

        if(this.state.hasError){
            return(
                <View>
                    <Text>Request data Failed</Text>
                </View>
            )
        }

        return(
            <View style={{ flex:1, justifyContent:'center' }}>

                <View style={{ flexDirection: 'row', padding: 4 }}>
                    <Text style={{ flex: 1,padding: 4, fontSize: 20 }}>List of Name</Text>
                    <Button title="Refresh" onPress={() => this.fetchData() }/>
                    <Button title="Add" onPress={() => this.addData()}/>
                </View>
                
                
                <ScrollView style={{ flex: 1 }}>
                { this.state.names.map((name,index) => {
                    return(<Name key={index} {...name} />)
                })}
                </ScrollView>

            </View>
        )
    }

}

export default ListName