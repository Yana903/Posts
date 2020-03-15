import React from "react";
import "../../App.css";

const LoadMore = ({ setLoadMore, isLoading, error }) => {
  return (
    <div className="uk-margin">
      <button
        className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom"
        onClick={setLoadMore}
      >
        Load more
        {isLoading ? (
          <div
            className="uk-margin-small-left uk-icon uk-spinner"
            uk-spinner="ratio: 0.6"
          ></div>
        ) : null}
        {error ? error : null}
      </button>
    </div>
  );
};
export default LoadMore;
