import React, {useEffect} from 'react';
import {connect} from "react-redux";


const HavePosts = (Component: any) => {

    const PostComponent = (props: any) => {
        return props.Posts ? <Component Posts={props.Posts}/> : <div>Постов нет</div>
    }

    let mapStateToProps = (state: any) => {
        return {
            Posts: state.App.Posts
        }
    }

    return connect(mapStateToProps, {})(PostComponent)
};

export default HavePosts;