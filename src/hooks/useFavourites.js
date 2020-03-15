import React, { useContext, useReducer } from "react";

const FavouritesContext = React.createContext();

export const FavouritesProvider = ({ children }) => {
  const value = useFavouritesProvider();

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => {
  return useContext(FavouritesContext);
};

const reducerFavourites = (state, action) => {
  switch (action.type) {
    case "addFavourites":
      const newFavourite = {};
      newFavourite.id = action.payload;
      return {
        ...state,
        favourites: [...state.favourites, newFavourite]
      };
    case "toggleFavourites":
      const toggleFavouriteId = action.payload.id;
      if (state.favourites.some(favourite => toggleFavouriteId === favourite.id)) {
        const newFavourites = state.favourites.filter(
          favourite => toggleFavouriteId !== favourite.id
        );
        return {
          ...state,
          favourites: newFavourites
        };
      }
      return {
        ...state,
        favourites: [...state.favourites, action.payload]
      };
    default:
      return state;
  }
};

const useFavouritesProvider = () => {
  const initialState = {
    favourites: []
  };
  const [state, dispatch] = useReducer(reducerFavourites, initialState);
  return { state, dispatch };
};
