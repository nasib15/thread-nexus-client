import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import useAxios from "./useAxios";
import { AuthContext } from "../providers/AuthProvider";

const useUser = () => {
  const { user } = useContext(AuthContext);
  const axiosFetch = useAxios();
  // Get user data
  const { data: userData, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await axiosFetch(`/user/${user?.email}`);
      return data;
    },
  });
  return { userData, isLoading };
};

export default useUser;
