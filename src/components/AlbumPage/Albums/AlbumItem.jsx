import React from "react";

const AlbumItem = () => {
  return (
    <div>
      <div class="uk-card uk-card-default uk-margin-medium-bottom uk-light">
        <img src="https://picsum.photos/600/400" alt="" uk-cover />
        <canvas width="600" height="400"></canvas>
        <div class="uk-overlay-primary uk-position-cover"></div>
        <div class="uk-overlay uk-overlay-primary uk-position-bottom">
          <p>
            Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div class="uk-position-top-right uk-overlay">
          <a href="" uk-icon="icon: heart; ratio: 2"></a>
        </div>
      </div>
    </div>
  );
};

export default AlbumItem;
