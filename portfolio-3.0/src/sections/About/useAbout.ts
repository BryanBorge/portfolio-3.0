import { useQuery } from "@tanstack/react-query";
import { getAboutMeData } from "../../sanity/client";
import type { AboutQueryResult } from "../../types/sanity.client.types";

export const useAbout = () => {
  const query = useQuery({
    queryKey: ["about"],
    queryFn: getAboutMeData,
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
