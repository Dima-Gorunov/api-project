import exp from "constants";
import {PostApi} from "../Api/Api";

const SET_INITIALIZED = "SET_INITIALIZED"
const SET_LOADING = "SET_LOADING"

let initialState = {
    initialized: false,
    Loading: false
}

let AppReducer = (state = initialState, action: any): typeof initialState => {

    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true
            }
        }
        case SET_LOADING: {
            return {
                ...state,
                Loading: action.payload
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}


export const initializedApp = () => {
    return async (dispatch: any) => {
        await dispatch(setInitialized())
        // должна быть проверка ответа сервера | Пример: data.resultCode===0 ? "меняем state" : "не меняем"
    }
}

export const setInitialized = () => ({type: SET_INITIALIZED})
export const setLoading = (loading: boolean) => ({type: SET_LOADING, payload: loading})
export default AppReducer