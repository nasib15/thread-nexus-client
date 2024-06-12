import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAxiosSecure from "./useAxiosSecure";

const useFullSiteData = () => {
  const axiosFetch = useAxios();
  const axiosSecure = useAxiosSecure();
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
      const { data } = await axiosSecure(`/users`);
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
