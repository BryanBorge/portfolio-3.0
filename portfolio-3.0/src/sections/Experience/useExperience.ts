import { useQuery } from "@tanstack/react-query";
import { getExperienceData } from "../../sanity/client";
import type { WorkExperience } from "../../types/sanity.types";

export const useExperience = () => {
  const query = useQuery({
    queryKey: ["experience"],
    queryFn: getExperienceData,
    staleTime: Infinity,
  });

  return {
    data: query.data ?? ([] as WorkExperience[]),
    isLoading: query.status === "pending",
    isError: query.status === "error",
    error: query.error,
    refetch: query.refetch,
  };
};
