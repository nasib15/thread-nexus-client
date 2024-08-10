import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useCommentsPost = (postId) => {
  const axiosFetch = useAxios();
  const { data: comments = [], isLoading } = useQuery({
    queryKey: ["comments", postId],
    queryFn: async () => {
      const { data } = await axiosFetch(`/comments/${postId}`);
      return data;
    },
  });

  return { comments, isLoading };
};

export default useCommentsPost;
