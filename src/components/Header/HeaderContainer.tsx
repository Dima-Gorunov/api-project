import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import Header from "./Header";

const HeaderContainer = (props: any) => {
    //на будущее
    return <Header {...props}/>
};

let mapStateToProps = (state: any) => {
    return {}
}
export default compose(
    connect(mapStateToProps, {})
)(HeaderContainer);