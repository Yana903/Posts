import React, { Fragment } from "react";
import CommentsItem from "./CommentsItem";

const Comments = ({ comments }) => {
  return (
    <Fragment>
      <h3 class="uk-margin-remove-top">Comments:</h3>
      {comments.map(comment => (
            <CommentsItem
                author={comment.name}
                email={comment.email}
                body={comment.body}/>
        ))}
    </Fragment>
  );
};

export default Comments;

