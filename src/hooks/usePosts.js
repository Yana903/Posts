import useFetch from "./useFetch";

const usePosts = (params) => {
  return useFetch(`https://jsonplaceholder.typicode.com/posts?${params}`);
};

const usePostsComments = (id) => {
  return useFetch(`https://jsonplaceholder.typicode.com/posts/${id}?_embed=comments`);
};

export default usePosts;
export {usePostsComments};
