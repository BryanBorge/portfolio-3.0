import { useQuery } from "@tanstack/react-query";
import { getExperienceData } from "../../sanity/client";
import type { ExperienceQueryResponse } from "../../types/sanity.client.types";

export const useExperience = () => {
  const query = useQuery({
    queryKey: ["experience"],
    queryFn: getExperienceData,
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
