import React from "react";
import { NavLink } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import Albums from "./Albums/Albums";
import LoadMore from "../LoadMore/LoadMore";
import Pagination from "../Pagination/Pagination";

const AlbumPage = () => {
  return (
    <MainLayout>
      <Albums />
      <LoadMore />
      <Pagination />
    </MainLayout>
  );
};

export default AlbumPage;
