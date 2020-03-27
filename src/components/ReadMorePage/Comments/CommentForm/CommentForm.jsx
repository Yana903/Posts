import React from "react";

const CommentForm = ({setName, setEmail, setComment, name, email, comment, postId }) => {
  const sendComment = (evt) => {
    evt.preventDefault();
  
    const data = JSON.stringify({
      postId,
      name,
      email,
      body: comment
    });
    
    const ACTION_URL = "https://jsonplaceholder.typicode.com/comments"
    fetch(ACTION_URL, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    })
      .then((response) => {
        if (response.ok === true) {
          // Submitted successfully!
          setName("");
          setEmail("");
          setComment("");
        }
  
        return response.json();
      })
      .then((object) => {
        // Comment submission failed.
        // Output `object.message` to see the error message.
      })
      .catch(error => console.error('Error:', error));
  }
  return (
    <form action="#"
          class="uk-comment-form uk-margin-medium-top">
      <fieldset class="uk-fieldset">
        <legend class="uk-legend">Add Comment</legend>
        <div class="uk-margin">
          <input class="uk-input"
                type="text"
                placeholder="Name" required
                value={name || ""}
                onChange = { e => setName(e.target.value)}
          />
        </div>
        <div class="uk-margin">
          <input class="uk-input"
                type="email"
                placeholder="Email"
                required
                value={email || ""}
                onChange = { e => setEmail(e.target.value)}
                />
        </div>
        <div class="uk-margin">
          <textarea
            class="uk-textarea"
            rows="5"
            placeholder="Comment"
            required
            value={comment || ""}
                onChange = { e => setComment(e.target.value)}
          ></textarea>
        </div>
        <div class="uk-margin">
          <button class="uk-button uk-button-primary"
                  type="submit"
                  onClick = { (evt) => sendComment(evt) }>
                  Post Comment
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default CommentForm;
