import React from 'react';
import CustomLink from "../../CustomElements/CustomLink";
import LogoSvg from "../../img/LogoSvg";

const Header = () => {

    return (
        <header className="header">
            <div className="logo-container">
                <LogoSvg/>
            </div>
            <div className="header_menu-container">
                <CustomLink to="">
                    Главная страница
                </CustomLink>
                <CustomLink to="/my-profile">
                    Мой Профиль
                </CustomLink>
            </div>
        </header>
    );
};

export default Header;