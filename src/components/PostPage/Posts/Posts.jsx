import React from "react";
import PostsItem from "../PostsItem/PostsItem";
import "../../../App.css";
import { useFavourites } from "../../../hooks/useFavourites";

const Posts = ({ posts, view }) => {
  const value = useFavourites();
  let favourites = value.state.favourites;

  return (
    <div
      className={`uk-grid uk-child-width-1-2@s ${
        view === "list" ? "uk-child-width-1-1@m" : "uk-child-width-1-3@m"
      }`}
    >
      {posts.map(post => (
        <PostsItem
          key={post.id}
          post={post}
          isFavourite={favourites.some(favourite => post.id === favourite.id)}
          addFavourites={() => {
            value.dispatch({ type: "toggleFavourites", payload: post });
          }}
        />
      ))}
    </div>
  );
};

export default Posts;
