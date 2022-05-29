import React, {useState} from 'react';
import {PostCommentType} from "../../Reducers/PostsReducer";
import CustomButton from "../../CustomElements/CustomButton";
import CommentForm from "../../CustomElements/CommentsForm";

const Commentaries = ({PostComments}: any) => {

    let [uploadComments, setUploadCom] = useState(false) // true - показаны все комменты, false - только первые 3
    let [formActive, setFormActive] = useState(false)    // true - форма видна, false - скрыта
    return (
        <div className="post_comment-container">
            <div className="title-text">
                Commentaries:
            </div>
            {PostComments.slice(0, uploadComments ? PostComments.length : 3).map((e: PostCommentType, index: any) => (
                <div className="post_comment" key={`post_com_${index}`}>
                    <div className="title-text">
                        Имя: {e.name}<br/>Email: {e.email}
                    </div>
                    <div className="sub-title-text">
                        {e.body}
                    </div>
                </div>
            ))}
            <div className="post_comment_menu-container">
                {uploadComments && < CustomButton onClick={() => setUploadCom(true)}>Загрузить все</CustomButton>}
                {!formActive && < CustomButton href="#comments-form" onClick={() => setFormActive(true)}>Добавить
                    комментарий</CustomButton>}
            </div>
            <div id="comments-form">
                {formActive && <CommentForm/>}
            </div>
        </div>
    );
};

export default Commentaries;