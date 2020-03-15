import React from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";
import Favourite from "../PostPage/Favourite/Favourite";
import { useFavourites } from "../../hooks/useFavourites";

const Navbar = () => {
  const favourites = useFavourites().state.favourites;

  return (
    <nav className="uk-navbar uk-navbar-container">
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li>
            <NavLink to="/posts" activeClassName="active">POSTS</NavLink>
          </li>
          <li>
            <NavLink to="/albums" activeClassName="active">ALBUMS</NavLink>
          </li>
        </ul>
        <div>Favourite(s) {favourites.length}</div>
      </div>
      <div className="uk-navbar-right">
        <div className="uk-navbar-item">
          <button
            className="uk-button uk-icon"
            type="button"
            uk-icon="icon: heart; ratio: 2"
            area-expanded="false"
          />
          <div className="uk-width-large uk-dropdown" uk-dropdown="mode: click">
            <div
              className="uk-dropdown-grid uk-child-width-1-1@m uk-grid"
              uk-grid=""
            >
              <Favourite />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
