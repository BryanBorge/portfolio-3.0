import { useQuery } from "@tanstack/react-query";
import { getSkillsData } from "../../sanity/client";
import type { SkillsQueryResult } from "../../types/sanity.client.types";

export const useTechStack = () => {
  const query = useQuery({
    queryKey: ["skills"],
    queryFn: getSkillsData,
    staleTime: Infinity,
  });

  return {
    data: query.data ?? ({} as SkillsQueryResult),
    isLoading: query.status === "pending",
    isError: query.status === "error",
    error: query.error,
    refetch: query.refetch,
  };
};
