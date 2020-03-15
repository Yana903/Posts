import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import PostPage from "./components/PostPage/PostPage";
import AlbumPage from "./components/AlbumPage/AlbumPage";

const App = () => {
  return (
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
    </Switch>
  );
};

export default App;
