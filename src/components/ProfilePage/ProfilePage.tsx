import React, {useState} from 'react';
import CustomLink from "../../CustomElements/CustomLink";
import CustomButton from "../../CustomElements/CustomButton";
import {PostType} from "../../Reducers/PostsReducer";

const ProfilePage = ({Profile, Posts}: any) => {

    let [uploadValid, setUploadValid] = useState(false) //если true - загружаются все посты пользователя

    return (
        <div className="profile-page-container">
            <div className="info-container">
                <div className="title-text">
                    {`${Profile.name}`}
                </div>
                <div className="contacts-container">
                    <div>
                        <div>Город: {Profile.address.city}</div>
                        <div>Email: {Profile.email}</div>
                        <div>Телефон: {Profile.phone}</div>
                    </div>
                    <div>
                        <div>Веб-сайт: {Profile.website}</div>
                        <div>Компания: {Profile.company.name}</div>
                    </div>
                </div>
                <div className="title-text">
                    Посты пользователя:
                </div>
                <div className="card-container">
                    {Posts.slice(0, uploadValid ? Posts.length : 3).map((e: PostType, index: any) => (
                        <div className="card" key={`post_${index}`}>
                            <div className="title-text">{e.title.slice(0, 15)}...</div>
                            <div className="sub-title-text">{e.body.slice(0, 45)}...</div>
                            <CustomLink to={`post/${e.id}`}>подробнее</CustomLink>
                        </div>
                    ))}
                    {!uploadValid && <CustomButton onClick={() => setUploadValid(true)}>Загрузить все</CustomButton>}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;