import Type from './types'

const API_URL = 'http://593f16cebb5eb40011ddb733.mockapi.io/data'

export const namesIsLoading = (bool) => {
    return {
        type: Type.NAMES_IS_LOADING,
        isLoading: bool
    }
}

export const namesHasError = (bool) => {
    return {
        type: Type.NAMES_HAS_ERROR,
        hasError: bool
    }
}

export const namesFetchDataSuccess = (names) => {
    return {
        type: Type.NAMES_FETCH_DATA_SUCCESS,
        names
    }
}

export const namesRemoved = (id) => {
    return {
        type: Type.NAMES_ITEM_REMOVED,
        id
    }
}

export const namesDataAdded = (name) => {
    console.log("Dispatch names added",name)
    return {
        type: Type.NAMES_DATA_ADDED,
        name
    }
}

export const namesAddData = (name) => {
    console.log("Dispatch add name",name)
    return (dispatch) => {
        fetch(API_URL, {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(name)
        })
        .then((response) => {
            if(!response.ok){
                console.log("Response: Error add data")
                throw Error(response.statusText)
            }

            return response
        })
        .then((response) => response.json())
        .then((data) => dispatch(namesDataAdded(data)))
    }
}

export const namesRemoveName = (id) => {
    return (dispatch) => {
        fetch(`${API_URL}/${id}`, {
            method:'DELETE'
        })
        .then((response) => {
            if(!response.ok){
                console.log("Response: Error delete data")
                throw Error(response.statusText)
            }

            return response
        })
        .then((response) => response.json())
        .then((name) => dispatch(namesRemoved(name.id)) )
        .catch((error) => console.log("Catch: Error delete data",error))

    }
}

export const namesFetchData = (url) => {
    return (dispatch) => {
        dispatch(namesIsLoading(true))

        console.log("namesFetchData ",url)

        fetch(url)
        .then((response) => {

            if(!response.ok){
                throw Error(response.statusText)
            }

            dispatch(namesIsLoading(false))

            return response
        })
        .then((response) => response.json())
        .then((names) => dispatch(namesFetchDataSuccess(names)) )
        .catch((error) => {
            console.log(error)
            dispatch(namesHasError(true))
        })
    }
} 