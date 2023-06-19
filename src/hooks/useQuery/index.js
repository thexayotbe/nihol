import { useQuery } from "react-query";
import useAxios from "../useAxios";

const useQueryHandler = ({ url, queryKey, method = "GET", body }) => {
  const axios = useAxios();
  return useQuery(
    queryKey,
    () =>
      axios({
        url,
        method,
        data: body,
      }).then((res) => res.data.data),
    {
      refetchOnWindowFocus: false,
    }
  );
};

export default useQueryHandler;
