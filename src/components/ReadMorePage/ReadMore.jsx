import React from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import { FavouritesProvider } from "../../hooks/useFavourites";
import PostHeader from "./PostHeader/PostHeader";
import PostBody from "./PostBody/PostBody";
import Comments from "./Comments/Comments";
import CommentForm from "./Comments/CommentForm/CommentForm";
import { usePostsComments } from "../../hooks/usePosts";

const ReadMore = () => {
  let { id } = useParams();
  const [state] = usePostsComments(id);
  const {isLoading, data, error } = state;
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
      {data && <Comments comments={data.comments} />}
      <CommentForm />
    </MainLayout>
  );
};

export default ReadMore;
