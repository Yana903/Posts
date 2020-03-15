import useFetch from "./useFetch";

const usePosts = (params) => {
  return useFetch(`https://jsonplaceholder.typicode.com/posts?${params}`);
};

export default usePosts;