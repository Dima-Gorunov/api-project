import React from 'react';
import {connect} from "react-redux";
import {getLoad} from "../Selectors/AppSelector";
import Preloader from "../components/Preloader";

const WithPreloader = (Component: any) => {

    let PreloadComponent = (props: any) => {
        return props.Loading ? <Preloader/> : <Component {...props} />
    }

    let mapStateToProps = (state: any) => {
        return {
            Loading: getLoad(state)
        }
    }

    return connect(mapStateToProps, {})(PreloadComponent)
};

export default WithPreloader;