import React from 'react';
import {compose} from "redux";
import {Link} from "react-router-dom";
import CustomLink from "../CustomElements/CustomLink";

const PageNotFound = () => {

    return (
        <div className="not-found-content-container">
            <div className="title-text">
                Страница не найдена
            </div>
            <CustomLink to="/">
                вернуться
            </CustomLink>
        </div>
    );
};

export default PageNotFound;