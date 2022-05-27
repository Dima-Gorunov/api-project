import React, {useEffect} from 'react';
import Commentaries from "./Commentaries";
import {compose} from "redux";
import {connect} from "react-redux";
import {getPostCommentsThunk} from "../../Reducers/PostsReducer";
import {getPostComSel, getPostLoad} from "../../Selectors/PostsSelector";
import Preloader from "../Preloader";
import {useParams} from "react-router-dom";

const CommentariesContainer = (props: any) => {

    let PostId = useParams().PostId

    useEffect(() => {
        props.getPostCommentsThunk(PostId)
    }, [])

    return props.Loading || !props.PostComments ? <Preloader/> : <Commentaries {...props} />
};

let mapStateToProps = (state: any) => {
    return {
        PostComments: getPostComSel(state),
        Loading: getPostLoad(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        getPostCommentsThunk
    })
)(CommentariesContainer);