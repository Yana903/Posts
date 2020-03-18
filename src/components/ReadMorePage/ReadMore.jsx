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
  const { data, error } = state;
  return (
    <FavouritesProvider>
      <MainLayout>
        {data && <PostHeader
          title={data.title}
          author="some Author"
        />}
        {data && <PostBody
            body={data.body}
        />}
        <hr />
        {data && <Comments
            comments={data.comments}
        />}
        <CommentForm />
      </MainLayout>
    </FavouritesProvider>
  );
};

export default ReadMore;
