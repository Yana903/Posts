import React from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import PostHeader from "./PostHeader/PostHeader";
import PostBody from "./PostBody/PostBody";
import Comments from "./Comments/Comments";
import CommentForm from "./Comments/CommentForm/CommentForm";
import { usePostsComments } from "../../hooks/usePosts";
import useCommentForm from "../../hooks/useCommentForm";

const ReadMore = () => {
  let { id } = useParams();
  const [state] = usePostsComments(id);
  const [commentState, dispatch] = useCommentForm();
  const {isLoading, data, error } = state;
  const {name, email, comment, setName } = commentState;
  return (
    <MainLayout>
      {isLoading ? (
          <div
            className="uk-margin-small-left uk-icon uk-spinner"
            uk-spinner="ratio: 0.6"
          ></div>
        ) : null}
      {data && <PostHeader title={data.title} author={data.userId} />}
      {data && <PostBody body={data.body} />}
      <hr />
      {data && <Comments comments={data.comments}/>}
      <CommentForm
        postId={id}
        name={name}
        email={email}
        comment={comment}
        setName={ name => {
          dispatch({type: "setName", payload: name})
        }}
        setEmail={ email => {
          dispatch({type: "setEmail", payload: email})
        }}
        setComment={ comment => {
          dispatch({type: "setComment", payload: comment})
        }}
      />
    </MainLayout>
  );
};

export default ReadMore;
