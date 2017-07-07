import { combineReducers } from 'redux'
import { names, namesIsLoading, namesHasError } from './names'

export default combineReducers({
    names,
    namesIsLoading,
    namesHasError
})