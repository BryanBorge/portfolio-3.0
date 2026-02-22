import { useQuery } from "@tanstack/react-query";
import { getAboutMe } from "../../sanity/client";
import type { AboutQueryResult } from "../../types/sanity.client.types";

export const useAbout = () => {
  const query = useQuery({
    queryKey: ["about"],
    queryFn: getAboutMe,
    staleTime: Infinity,
  });
  
  return {
    data: query.data ?? ({} as AboutQueryResult),
    isLoading: query.status === "pending",
    isError: query.status === "error",
    error: query.error,
    refetch: query.refetch,
  };
};
