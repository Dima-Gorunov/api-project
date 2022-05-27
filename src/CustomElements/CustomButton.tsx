import React from 'react';
import {Link} from "react-router-dom";

const CustomButton = (props: any) => {

    return (
        <div className="menu__custom-link-container" style={{margin: "auto 0"}}>
            <a {...props} className="custom-link">{props.children}</a>
        </div>
    );
};

export default CustomButton;