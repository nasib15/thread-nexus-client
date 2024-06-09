import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useFullSiteData = () => {
  const axiosFetch = useAxios();
  // getting post data
  const { data: postsData = [] } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await axiosFetch(`/posts`);
      return data;
    },
  });

  // getting users data
  const { data: usersData = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosFetch(`/users`);
      return data;
    },
  });

  // Getting comments data
  const { data: commentsData = [] } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const { data } = await axiosFetch(`/comments`);
      return data;
    },
  });

  const fullSiteData = { postsData, usersData, commentsData };

  return fullSiteData;
};

export default useFullSiteData;
