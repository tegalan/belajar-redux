import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'

import ListName from './components/ListName'
import configureStore from './store/configureStore'

const store = configureStore()

class App extends Component {

    render() {
        return(
            <Provider store={ store }>
                <ListName/>
            </Provider>
        )
    }
}

export default App