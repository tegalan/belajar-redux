import Type from '../actions/types'

export const namesIsLoading = (state = false, action) => {
    switch(action.type){
        case Type.NAMES_IS_LOADING:
            console.log("Dispatch nameisloading",action.isLoading)
            return action.isLoading
        default:
            return state
    }
}

export const namesHasError = (state = false, action) => {
    switch(action.type){
        case Type.NAMES_HAS_ERROR:
            console.log("Dispatch has error")
            return action.hasError
        default:
            return state
    }
}

export const names = (state = [], action) => {
    switch(action.type){
        case Type.NAMES_FETCH_DATA_SUCCESS:
            return action.names
        case Type.NAMES_ITEM_REMOVED:
            return state.filter((name) => {
                return action.id != name.id
            })
        case Type.NAMES_DATA_ADDED:
            return [
                ...state,
                action.name
            ]
        // case Type.NAMES_ITEM_REMOVED:
        //     return action.names
        default:
            return state
    }
}