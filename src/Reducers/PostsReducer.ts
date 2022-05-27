import {PostApi, ProfileApi} from "../Api/Api";
import {setLoading} from "./AppReducer";
import {convertText} from "../CustomElements/CustomFunction";


const SET_POSTS = "SET_POSTS"
const SET_ONE_POST = "SET_ONE_POST"
const SET_POST_COMMENTS = "SET_POST_COMMENTS"
const SET_POST_LOAD = "SET_POST_LOAD"
const UPPER_CASE_All_POSTS = "UPPER_CASE_All_POSTS"
const SET_TOTAL_COUNT_POSTS = "SET_TOTAL_COUNT_POSTS"
const ADD_POST_COMMENT = "ADD_POST_COMMENT"
export type PostType = {
    userId: number,
    id: number,
    title: string,
    body: string
}
export type PostCommentType = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

type initialStateType = {
    Posts: null | Array<PostType>,
    Post: null | PostType,
    PostComments: null | Array<PostCommentType>,
    Loading: boolean,
    TotalCountPost: null | number
}

let initialState: initialStateType = {
    Posts: null,
    Post: null,
    PostComments: null,
    Loading: false,
    TotalCountPost: null
}

let PostsReducer = (state = initialState, action: any): initialStateType => {

    switch (action.type) {
        case SET_POSTS: {
            return {
                ...state,
                Posts: action.payload
            }
        }
        case SET_ONE_POST: {
            return {
                ...state,
                Post: action.payload
            }
        }
        case SET_POST_COMMENTS: {
            return {
                ...state,
                PostComments: action.payload
            }
        }
        case ADD_POST_COMMENT: {
            return {
                ...state,
                PostComments: state.PostComments && [...state.PostComments, action.payload]
            }
        }
        case SET_POST_LOAD: {
            return {
                ...state,
                Loading: action.payload
            }
        }
        case SET_TOTAL_COUNT_POSTS: {
            return {
                ...state,
                TotalCountPost: action.payload
            }
        }
        case UPPER_CASE_All_POSTS: {
            return {
                ...state,
                Posts: state.Posts && state.Posts.map((e: PostType) => {
                    e.title = convertText(e.title)
                    e.body = convertText(e.body)
                    return e
                }),
                Post: state.Post && {
                    ...state.Post,
                    title: convertText(state.Post.title),
                    body: convertText(state.Post.body)
                },
                PostComments: state.PostComments && state.PostComments.map((e) => {
                    e.body = convertText(e.body)
                    return e
                })
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export const getPostsThunk = (limit: number, page: number) => {
    return async (dispatch: any) => {
        dispatch(setLoading(true))
        let data = await PostApi.getPost().then(response => response.data)
        // должна быть проверка ответа сервера | Пример: data.resultCode===0 ? "меняем state" : "не меняем"
        dispatch(setPosts(data))
        dispatch(upperCase())
        dispatch(setLoading(false))
    }
}

export const getOnePostThunk = (userId: number, postId: number) => {
    return async (dispatch: any) => {
        dispatch(setLoading(true))
        let data = await PostApi.getOnePost(userId, postId).then(response => response.data[0])
        // должна быть проверка ответа сервера | Пример: data.resultCode===0 ? "меняем state" : "не меняем"
        dispatch(setOnePost(data))
        dispatch(upperCase())
        dispatch(setLoading(false))
    }
}

export const getPostCommentsThunk = (postId: number) => {
    return async (dispatch: any) => {
        dispatch(setPostLoad(true))
        let data = await PostApi.getPostComments(postId).then(response => response.data)
        let totalCount = await PostApi.getAllComments().then(response => response.data.length)
        // должна быть проверка ответа сервера | Пример: data.resultCode===0 ? "меняем state" : "не меняем"
        dispatch(setTotalCountPosts(totalCount))
        dispatch(setPostComments(data))
        dispatch(upperCase())
        dispatch(setPostLoad(false))
    }
}

export const addCommentThunk = (postId: number, id: number, name: string, email: string, body: string) => {
    return async (dispatch: any) => {
        let data = await PostApi.addComment(postId, id + 24, name, email, body)
        // должна быть проверка ответа сервера | Пример: data.resultCode===0 ? "меняем state" : "не меняем"
        dispatch(addPostComment({postId, id, name, email, body}))
        dispatch(upperCase())
    }
}

const setOnePost = (post: any) => ({type: SET_ONE_POST, payload: post})
const upperCase = () => ({type: UPPER_CASE_All_POSTS})
const setPostComments = (comments: PostCommentType) => ({type: SET_POST_COMMENTS, payload: comments})
const addPostComment = (payload: PostCommentType) => ({type: ADD_POST_COMMENT, payload})
const setPostLoad = (payload: boolean) => ({type: SET_POST_LOAD, payload})
const setTotalCountPosts = (payload: number) => ({type: SET_TOTAL_COUNT_POSTS, payload})
export const setPosts = (posts: any) => ({type: SET_POSTS, payload: posts}) // просто так удобнее(payload: posts)
export default PostsReducer