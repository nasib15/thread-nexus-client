import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const usePosts = () => {
  const axiosFetch = useAxios();
  const { data: posts = [] } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await axiosFetch("/posts");
      return data;
    },
  });
  return { posts };
};

export default usePosts;
