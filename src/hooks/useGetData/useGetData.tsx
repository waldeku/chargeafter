import { useQuery } from "@tanstack/react-query";

import { CountryDTO } from "src/types";
import { DATA_FETCH_URL } from "src/utils/constants";

const useGetData = () => {
  const { isPending, error, data, isFetching } = useQuery<CountryDTO[]>({
    queryKey: ["repoData"],
    queryFn: async () => {
      const response = await fetch(DATA_FETCH_URL);
      return await response.json();
    },
  });

  return { isPending, error, data, isFetching };
};

export { useGetData };
