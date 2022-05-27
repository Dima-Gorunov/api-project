import React, {useEffect} from 'react';
import './scss/All.scss';
import PostsContainer from "./components/UserPostsPage/UserPostsPageContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializedApp} from "./Reducers/AppReducer";
import {Link, Outlet, Route, Routes} from "react-router-dom";
import HomePageContainer from "./components/Header/HeaderContainer";
import UsersPageContainer from "./components/UsersPage/UsersPageContainer";
import PageNotFound from "./components/PageNotFound";
import HeaderContainer from "./components/Header/HeaderContainer";
import FooterContainer from "./components/Footer/FooterContainer";
import ProfilePageContainer from "./components/ProfilePage/ProfilePageContainer";

let App = (props: any) => {
    useEffect(() => {
        props.initializedApp()
    })
    if (!props.initialized) {
        return <div>Start APP</div>
    }
    return (
        <div className="App">
            <HeaderContainer/>
            <div className="content-container">
                <Routes>
                    <Route index element={<UsersPageContainer/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                    <Route path="about/*" element={<div>о нас</div>}/>
                    <Route path="user/:UserId" element={<ProfilePageContainer/>}/>
                    <Route path="user/:UserId/post/:PostId" element={<PostsContainer/>}/>
                </Routes>
            </div>
            <FooterContainer/>
        </div>
    );
}

let mapStateToProps = (state: any) => {
    return {
        initialized: state.App.initialized
    }
}

export default compose(
    connect(mapStateToProps, {
        initializedApp
    })
)(App);
