import React from "react";
import FavouriteItem from "./FavouriteItem";
import { useFavourites } from "../../../hooks/useFavourites";

const Favourite = () => {
  const favourites = useFavourites().state.favourites;
  const dispatch = useFavourites().dispatch;

  return (
    <div>
      <table className="uk-table uk-table-divider uk-table-justify">
        <thead>
          <tr>
            <th>Title</th>
            <th className="uk-text-right">Delete</th>
          </tr>
        </thead>
        <tbody>
          {favourites.map((favourite, index) => (
            <FavouriteItem
              key={index}
              title={favourite.title}
              removeFavourites={() => {
                dispatch({ type: "toggleFavourites", payload: favourite });
              }}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Favourite;
