import React from "react";
import { NavLink } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import Albums from "./Albums/Albums";
import LoadMore from "../LoadMore/LoadMore";
import Pagination from "../Pagination/Pagination";
import { FavouritesProvider } from "../../hooks/useFavourites";

const AlbumPage = () => {
  return (
    <FavouritesProvider>
      <MainLayout>
        <Albums />
        <LoadMore />
        <Pagination />
      </MainLayout>
    </FavouritesProvider>
  );
};

export default AlbumPage;
