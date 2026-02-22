import { useQuery } from "@tanstack/react-query";
import { getExperience } from "../../sanity/client";
import type { ExperienceQueryResponse } from "../../types/sanity.client.types";

export const useExperience = () => {
  const query = useQuery({
    queryKey: ["experience"],
    queryFn: getExperience,
    staleTime: Infinity,
  });

  return {
    data: query.data ?? ({} as ExperienceQueryResponse),
    isLoading: query.status === "pending",
    isError: query.status === "error",
    error: query.error,
    refetch: query.refetch,
  };
};
