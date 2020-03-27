import { useReducer } from "react";

const reducerPaginate = (state, action) => {
  switch (action.type) {
    case "getMore":
      return {
        ...state,
        pagingMode: 1,
        limit: state.limit + 3,
        startIndex: (state.currentPage - 1) * state.pageSize
      };
    case "setPage":
      let newCurrentPage = action.payload < 1 ? 1 : action.payload;
      let maxPage = Math.ceil(state.totalCount / state.pageSize);
      newCurrentPage = newCurrentPage > maxPage ? maxPage : newCurrentPage;

      return {
        ...state,
        pagingMode: 0,
        startIndex: (newCurrentPage - 1) * state.pageSize + 0,
        limit: state.pageSize,
        currentPage: newCurrentPage
      };
    case "setPageSize":
      return {
        ...state,
        pagingMode: 0,
        startIndex: 0,
        limit: action.payload,
        pageSize: action.payload,
        currentPage: 1
      };
      case "setTotalCount":
        return {
          ...state,
          totalCount: action.payload
        }; 
    default:
      return state;
  }
};

const usePaginate = (pageSize, totalCount) => {
  const initialState = {
    pagingMode: 0,
    startIndex: 1,
    currentPage: 1,
    limit: pageSize,
    pageSize: pageSize,
    totalCount: totalCount
  };

  const [state, dispatch] = useReducer(reducerPaginate, initialState);

  return [state, dispatch];
};

export default usePaginate;
