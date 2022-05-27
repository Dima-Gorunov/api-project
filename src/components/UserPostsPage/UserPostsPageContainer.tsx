import React, {useEffect} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import UserPostsPage from "./UserPostsPage";
import {getOnePostThunk} from "../../Reducers/PostsReducer";
import {getLoad} from "../../Selectors/AppSelector";
import Preloader from "../Preloader";
import {useParams} from "react-router-dom";
import {getOnePostSel, getPostsSel} from "../../Selectors/PostsSelector";

const UserPostsPageContainer = ({...props}: any) => {

    let UserId = useParams().UserId
    let PostId = useParams().PostId

    useEffect(() => {
        props.getOnePostThunk(UserId, PostId)
    }, [])

    return props.Loading || !props.OnePost ? <Preloader/> : <UserPostsPage {...props} />
};

let mapStateToProps = (state: any) => {
    return {
        Posts: getPostsSel(state),
        Loading: getLoad(state),
        OnePost: getOnePostSel(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        getOnePostThunk
    }),
)(UserPostsPageContainer);