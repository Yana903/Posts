import React from "react";

const CommentsItem = ({ author, email, body }) => {
  return (
    <div class="uk-comments">
      <article class="uk-comment">
        <header class="uk-comment-header uk-grid uk-grid-medium uk-flex-middle">
          <div class="uk-width-expand">
            <h4 class="uk-comment-title uk-margin-remove">
              <a class="uk-link-reset" href="#">
                {author}
              </a>
            </h4>
            <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
              <li>
                <a href="#">{email}</a>
              </li>
            </ul>
          </div>
        </header>
        <div class="uk-comment-body">
          <p>
            {body}
          </p>
        </div>
      </article>
      <hr />
    </div>
  );
};

export default CommentsItem;
