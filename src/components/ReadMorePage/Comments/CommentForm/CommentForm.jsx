import React from "react";

const CommentForm = () => {
  return (
    <form action="#" class="uk-comment-form uk-margin-medium-top">
      <fieldset class="uk-fieldset">
        <legend class="uk-legend">Add Comment</legend>
        <div class="uk-margin">
          <input class="uk-input" type="text" placeholder="Name" required />
        </div>
        <div class="uk-margin">
          <input class="uk-input" type="email" placeholder="Email" required />
        </div>
        <div class="uk-margin">
          <textarea
            class="uk-textarea"
            rows="5"
            placeholder="Comment"
            required
          ></textarea>
        </div>
        <div class="uk-margin">
          <button class="uk-button uk-button-primary" type="submit">
            Post Comment
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default CommentForm;
