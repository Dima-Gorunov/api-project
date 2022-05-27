import React from 'react';
import Footer from "./Footer";
import {compose} from "redux";
import {connect} from "react-redux";

const FooterContainer = (props: any) => {
    //на всякий )
    return <Footer {...props}/>
};

let mapStateToProps = (state: any) => {
    return {}
}
export default compose(
    connect(mapStateToProps, {})
)(FooterContainer);