import { useQuery } from "@tanstack/react-query";
import { getSkillsData } from "../../sanity/client";
import type { Skills } from "../../types/sanity.types";

export const useTechStack = () => {
  const query = useQuery({
    queryKey: ["skills"],
    queryFn: getSkillsData,
    staleTime: Infinity,
  });

  return {
    data: query.data ?? ({} as Skills),
    isLoading: query.status === "pending",
    isError: query.status === "error",
    error: query.error,
    refetch: query.refetch,
  };
};
