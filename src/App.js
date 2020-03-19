import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import PostPage from "./components/PostPage/PostPage";
import AlbumPage from "./components/AlbumPage/AlbumPage";
import ReadMore from "./components/ReadMorePage/ReadMore";
import { FavouritesProvider } from "./hooks/useFavourites";

const App = () => {
  
  return (
    <FavouritesProvider>
    <Switch>
      <Route exact path="/">
        <PostPage />
      </Route>
      <Route path="/posts">
        <PostPage />
      </Route>
      <Route path="/albums">
        <AlbumPage />
      </Route>
      <Route path="/readMore/:id">
        <ReadMore />
      </Route>
    </Switch>
    </FavouritesProvider>
  );
};

export default App;
