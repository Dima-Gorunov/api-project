import {PostApi, UsersApi} from "../Api/Api";
import {setLoading} from "./AppReducer";

const SET_USERS = "SET_USERS"
const FILTER_USER = "FILTER_USER"
const POST_USER = "POST_USER"

type UserType = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: object,
    phone: string,
    website: string,
    company: object
}

type initialStateType = {
    Users: null | Array<UserType>
}

let initialState: initialStateType = {
    Users: null
}


let UsersReducer = (state = initialState, action: any): initialStateType => {

    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                Users: action.payload
            }
        }
        default: {
            return {
                ...state
            }
        }

    }
}

export const getUsersThunk = () => {
    return async (dispatch: any) => {
        dispatch(setLoading(true))
        let data = await UsersApi.getUsers()
        // должна быть проверка ответа сервера | Пример: data.resultCode===0 ? "меняем state" : "не меняем"
        dispatch(setUsers(data))
        dispatch(setLoading(false))
    }
}

const setUsers = (Users: Array<UserType>) => ({type: SET_USERS, payload: Users})
export const postUser = (User: Array<UserType>) => ({type: POST_USER, payload: User})
export default UsersReducer