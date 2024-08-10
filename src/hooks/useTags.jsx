import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useTags = () => {
  const axiosFetch = useAxios();
  const { data: tags = [] } = useQuery({
    queryKey: ["tags"],
    queryFn: async () => {
      const { data } = await axiosFetch("/tags");
      return data;
    },
  });
  return { tags };
};

export default useTags;
