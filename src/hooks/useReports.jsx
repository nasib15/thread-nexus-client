import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useReports = () => {
  const axiosSecure = useAxiosSecure();
  // Get all reports
  const {
    data: reports,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["reports"],
    queryFn: async () => {
      const { data } = await axiosSecure("/reports");
      return data;
    },
  });
  return { reports, isLoading, refetch };
};

export default useReports;
