import { useQuery } from "@tanstack/react-query";

import { getIranCities } from "../api/api";

export const useGetIranCities = () => {
  return useQuery({
    queryKey: ["getIranCities"],
    queryFn: () => getIranCities(),
  });
};
