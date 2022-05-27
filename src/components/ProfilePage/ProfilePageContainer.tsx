import React, {useEffect} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import ProfilePage from "./ProfilePage";
import {useParams} from "react-router-dom";
import {setProfileThunk} from "../../Reducers/ProfileReducer";
import {getProfile, getProfilePosts} from "../../Selectors/ProfileSelector";
import Preloader from "../Preloader";
import {getLoad} from "../../Selectors/AppSelector";

const ProfilePageContainer = (props: any) => {

    let UserId = useParams().UserId

    useEffect(() => {
        props.setProfileThunk(UserId)
    }, [])

    return props.Loading || !props.Profile ? <Preloader/> : <ProfilePage {...props}/>
};

let mapStateToProps = (state: any) => {
    return {
        Profile: getProfile(state),
        Posts: getProfilePosts(state),
        Loading: getLoad(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        setProfileThunk
    })
)(ProfilePageContainer);