import {applyMiddleware, combineReducers, createStore} from "redux";
import AppReducer from "../Reducers/AppReducer";
import thunk from "redux-thunk";
import PostsReducer from "../Reducers/PostsReducer";
import UsersReducer from "../Reducers/UsersReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import ProfileReducer from "../Reducers/ProfileReducer";


const reducers = combineReducers({
    App: AppReducer,
    PostsData: PostsReducer,
    UsersPage: UsersReducer,
    ProfilePage: ProfileReducer
})
const composedEnhancer = composeWithDevTools(
    // Add whatever middleware you actually want to use here
    applyMiddleware(thunk)
    // other store enhancers if any
)

const store = createStore(reducers, composedEnhancer)

export default store