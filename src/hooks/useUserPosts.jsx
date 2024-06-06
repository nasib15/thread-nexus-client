import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import useAxios from "./useAxios";
import { AuthContext } from "../providers/AuthProvider";

const useUserPosts = () => {
  const { user } = useContext(AuthContext);
  const axiosFetch = useAxios();
  // Get post from individual user
  const { data: userPosts, isLoading } = useQuery({
    queryKey: ["userPosts", user?.email],
    queryFn: async () => {
      const { data } = await axiosFetch(`/posts?email=${user?.email}`);
      return data;
    },
  });
  return { userPosts, isLoading };
};

export default useUserPosts;
