import React, { Component } from 'react'
import { View, Text, Button, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { namesFetchData, namesIsLoading, namesRemoveName } from '../actions/names'

import Name from './Name'
import InputName from './InputName'

class ListName extends Component {


    componentDidMount(){

        this.refreshData()

    }

    refreshData() {
        this.props.fetchData('http://593f16cebb5eb40011ddb733.mockapi.io/data')
    }

    // addData() {

    //     this.props.dispatch(namesIsLoading(true))
        
    //     fetch('http://593f16cebb5eb40011ddb733.mockapi.io/data',{
    //         method: 'POST'
    //     })
    //     .then((data) => this.refreshData() )
    //     .catch((error) => this.props.dispatch(namesIsLoading(false)))
    // }

    renderContent() {
        if(this.props.hasError){
            return(
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text style={{textAlign:'center',fontSize:20}}>Request Data Error</Text>
                </View>
            )
        }

        if(this.props.isLoading){
            return(
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text style={{textAlign:'center',fontSize:20}}>Loading...</Text>
                </View>
            )
        }

        return(
            <ScrollView style={{ flex: 1 }}>
            { this.props.names.map((name,index) => {
                return(
                    <TouchableOpacity key={name.id} onPress={ () => this.props.removeName(name.id) }>
                        <Name {...name} />
                    </TouchableOpacity>
                )
            })}
            </ScrollView>
        )
    }

    render() {

        return(
            <View style={{ flex:1, justifyContent:'center' }}>
                
                <InputName/>

                <View style={{ flexDirection: 'row', padding: 4 }}>
                    <Text style={{ flex: 1,padding: 4, fontSize: 20 }}>List of Name</Text>
                    {/*<Button title="Add" onPress={() => this.addData()}/>*/}
                    <Button title="Refresh" onPress={() => this.refreshData() }/>
                </View>
                
                <View style={{flex:1}}>
                    { this.renderContent() }
                </View>

            </View>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        names: state.names,
        hasError: state.namesHasError,
        isLoading: state.namesIsLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(namesFetchData(url)),
        removeName: (id) => dispatch(namesRemoveName(id)),
        dispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListName)