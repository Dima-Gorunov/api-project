import React, {useState} from 'react';
import CustomButton from "../../CustomElements/CustomButton";
import CommentariesContainer from "./CommentariesContainer";

const UserPostsPage = ({OnePost}: any) => {

    let [uploadComments, setUploadCom] = useState(false)
    return (
        <div className="post-container">
            <div className="title-text">
                {OnePost.title}
            </div>
            <div className="sub-title-text">
                {OnePost.body}
            </div>
            {uploadComments
                ? <CommentariesContainer/>  // раздел с комментами поста
                : <CustomButton onClick={() => setUploadCom(!uploadComments)}>
                    Показать комментарии
                </CustomButton>
            }
        </div>
    );
};

export default UserPostsPage;