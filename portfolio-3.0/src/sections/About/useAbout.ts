import { useQuery } from "@tanstack/react-query";
import { getAboutMeData } from "../../sanity/client";
import type { About } from "../../types/sanity.types";

export const useAbout = () => {
  const query = useQuery({
    queryKey: ["about"],
    queryFn: getAboutMeData,
    staleTime: Infinity,
  });

  return {
    data: query.data ?? ({} as About),
    isLoading: query.status === "pending",
    isError: query.status === "error",
    error: query.error,
    refetch: query.refetch,
  };
};
