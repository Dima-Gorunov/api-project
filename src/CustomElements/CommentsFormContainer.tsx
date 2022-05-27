import {Field, Form, Formik} from 'formik';
import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {addCommentThunk} from "../Reducers/PostsReducer";
import {getOnePostSel, getTotalCountPosts} from "../Selectors/PostsSelector";

const CommentForm = (props: any) => {

    let submitForm = (value: any) => {
        props.addCommentThunk(props.Post.id, props.TotalCountPosts, value.name, value.email, value.body)
    }

    return (props.Post && <Formik
            initialValues={{name: "", email: "", body: ""}}
            onSubmit={submitForm}>
            <Form className="comments-form-container">
                <div className="form-user-info">
                    <Field type="name" name="name" placeholder="name"/>
                    <Field type="email" name="email" placeholder="email"/>
                </div>
                <div className="form-user-text">
                    <Field type="body" as="textarea" name="body" placeholder="body"/>
                </div>
                <div className="menu__custom-link-container" style={{margin: "auto 0"}}>
                    <button type="submit" {...props} className="custom-link">Комментировать</button>
                </div>
            </Form>
        </Formik>);
};

let mapStateToProps = (state: any) => {
    return {
        Post: getOnePostSel(state),
        TotalCountPosts: getTotalCountPosts(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        addCommentThunk
    }))(CommentForm);