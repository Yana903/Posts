import React from "react";
import { Link } from "react-router-dom";
import "../../../App.css";

const PostsItem = ({ post, addFavourites, isFavourite }) => {

  const classes = ["uk-icon-link uk-icon"];
  isFavourite ? classes.push("fav") : classes.push("");
  return (
    <div>
      <div className="uk-card uk-card-default uk-margin-medium-bottom">
        <div className="uk-card-header">
          <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
            {post.title}
            <br />
            {"id = " + post.id} {"userId =" + post.userId}
            <Link
              className={classes.join(" ")}
              to="/"
              uk-icon="heart"
              onClick={e => {
                e.preventDefault();
                addFavourites();
              }}
            />
          </h3>
        </div>
        <div className="uk-card-body">
          <p>{post.body}</p>
        </div>
        <div className="uk-card-footer">
          <Link className="uk-button uk-button-text" to={`/readMore/${post.id}`}>
            Read more
          </Link>
        </div>
        <div>
      </div>
      </div>
    </div>
  );
};

export default PostsItem;
