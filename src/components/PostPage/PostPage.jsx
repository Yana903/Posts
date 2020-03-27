import React, { useState } from "react";
import "../../App.css";
import MainLayout from "../../layout/MainLayout";
import Filters from "./Filters/Filters";
import Posts from "./Posts/Posts";
import Pagination from "../Pagination/Pagination";
import LoadMore from "../LoadMore/LoadMore";
import useFilter from "../../hooks/useFilter";
import usePosts from "../../hooks/usePosts";
import usePaginate from "../../hooks/usePaginate";

const PostPage = () => {
  const [view, setView] = useState("list"); //grid
  const { search, setSearch, order, setOrder } = useFilter();
  const [state, dispatch] = usePaginate(6, 0);
  const [{ isLoading, data, totalCount, error }] = usePosts(
    `${state.pagingMode === 0 ? "_page" : "_start"}=${
      state.pagingMode === 0 ? state.currentPage : state.startIndex
    }` + `&_limit=${state.limit}&q=${search}&_sort=id&_order=${order}`
  );
  if(state.totalCount !== totalCount) {
    dispatch({ type: "setTotalCount", payload: totalCount });
  }
  return (
    <MainLayout>
      <Filters
        view={view}
        search={search}
        order={order}
        limit={state.pageSize}
        setView={setView}
        setSearch={setSearch}
        setOrder={setOrder}
        setLimit={pageSize => {
          dispatch({ type: "setPageSize", payload: pageSize });
        }}
      />
      {data && <Posts posts={data} view={view} />}

      <LoadMore
        setLoadMore={() => {
          dispatch({ type: "getMore" });
        }}
        isLoading={isLoading}
      />
      <Pagination
        currentPage={state.currentPage}
        totalCount={totalCount}
        setCurrentPage={page => {
          dispatch({ type: "setPage", payload: page });
        }}
        limit={state.limit}
        pageSize={state.pageSize}
      />
    </MainLayout>
  );
};

export default PostPage;
