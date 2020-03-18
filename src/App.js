import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import PostPage from "./components/PostPage/PostPage";
import AlbumPage from "./components/AlbumPage/AlbumPage";
import ReadMore from "./components/ReadMorePage/ReadMore";

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
      <Route path="/readMore/:id">
        <ReadMore />
      </Route>
    </Switch>
  );
};

export default App;
