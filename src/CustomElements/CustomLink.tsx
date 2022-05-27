import React from 'react';
import {Link} from "react-router-dom";

const CustomLink = (props: any) => {

    return (
        <div className="menu__custom-link-container">
            <Link className="custom-link" to={props.to}>{props.children}</Link>
        </div>
    );
};

export default CustomLink;