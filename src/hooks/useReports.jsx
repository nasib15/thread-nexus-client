import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useReports = () => {
  const axiosFetch = useAxios();
  // Get all reports
  const { data: reports, isLoading } = useQuery({
    queryKey: ["reports"],
    queryFn: async () => {
      const { data } = await axiosFetch("/reports");
      return data;
    },
  });
  return { reports, isLoading };
};

export default useReports;
