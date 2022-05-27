import React from 'react';
import Preloader from "../components/Preloader";
import {getInitialized, getLoad} from "../Selectors/AppSelector";
import {connect} from "react-redux";

const WithInitialized = (Component: any) => {

    let PreloadComponent = (props: any) => {

        return props.Initialized ? <Component {...props} /> : <Preloader/>
    }

    let mapStateToProps = (state: any) => {

        return {
            Initialized: getInitialized(state)
        }
    }

    return connect(mapStateToProps, {})(PreloadComponent)
};

export default WithInitialized;