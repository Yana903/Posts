import React from "react";

const PostHeader = ({ title, author }) => {
  return (
    <h1 class="uk-heading-bullet uk-margin-medium-bottom">
      <span>{title}</span>
      <a class="uk-text-small" href="#">
        Author userId: {author}
      </a>
    </h1>
  );
};

export default PostHeader;
