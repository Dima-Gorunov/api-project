import {ProfileApi} from "../Api/Api";
import {setLoading} from "./AppReducer";
import {PostType} from "./PostsReducer";
import {convertText} from "../CustomElements/CustomFunction";

const SET_PROFILE = "SET_PROFILE"
const SET_POSTS = "SET_POSTS"
const SET_ID = "SET_ID"
const UPPER_CASE_ACTIVE_POST = "UPPER_CASE_ACTIVE_POST"

type initialStateType = {
    Profile: null | Object,
    Posts: null | Array<PostType>,
    id: null | number
}

let initialState: initialStateType = {
    Profile: null,
    Posts: null,
    id: null
}

let ProfileReducer = (state = initialState, action: any): initialStateType => {

    switch (action.type) {
        case SET_PROFILE: {
            return {
                ...state,
                Profile: action.payload
            }
        }
        case SET_ID: {
            return {
                ...state,
                id: action.payload
            }
        }
        case SET_POSTS: {
            return {
                ...state,
                Posts: action.payload
            }
        }
        case UPPER_CASE_ACTIVE_POST:{
            return {
                ...state,
                Posts: state.Posts && [ ...state.Posts.map((e)=>{
                    e.title=convertText(e.title)
                    e.body=convertText(e.body)
                    return e
                })]
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export const setProfileThunk = (id: number) => {
    return async (dispatch: any) => {
        dispatch(setLoading(true))
        let data = await ProfileApi.getProfile(id).then(response => response.data)
        let posts = await ProfileApi.getPosts(data.id).then(response => response.data)
        // должна быть проверка ответа сервера | Пример: data.resultCode===0 ? "меняем state" : "не меняем"
        dispatch(setProfile(data))
        dispatch(setId(data.id))
        dispatch(setPosts(posts))
        dispatch(upperCase())
        dispatch(setLoading(false))
    }
}

const setId = (id: number) => ({type: SET_ID, payload: id})
const setProfile = (payload: any) => ({type: SET_PROFILE, payload})
const setPosts = (payload: any) => ({type: SET_POSTS, payload})
const upperCase=()=>({type:UPPER_CASE_ACTIVE_POST}) // сорян за дубоирование
export default ProfileReducer