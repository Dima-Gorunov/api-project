import React, {useEffect} from 'react';
import {compose} from "redux";
import UsersPage from "./UsersPage";
import {connect} from "react-redux";
import {getUsersThunk} from "../../Reducers/UsersReducer";
import {getUsersSel} from "../../Selectors/UserSelector";
import {getLoad} from "../../Selectors/AppSelector";
import Preloader from "../Preloader";

const UsersPageContainer = (props: any) => {

    useEffect(() => {
        props.getUsersThunk();
    }, [])

    return props.Loading || !props.Users ? <Preloader/> : <UsersPage {...props}/>
};

let mapStateToProps = (state: any) => {
    return {
        Users: getUsersSel(state),
        Loading: getLoad(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        getUsersThunk,
    })
)(UsersPageContainer);