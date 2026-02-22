import { useQuery } from "@tanstack/react-query";
import { getTechStack } from "../../sanity/client";
import type { TechStackQueryResult } from "../../types/sanity.client.types";

export const useTechStack = () => {
  const query = useQuery({
    queryKey: ["techStack"],
    queryFn: getTechStack,
    staleTime: Infinity,
  });

  return {
    data: query.data ?? ({} as TechStackQueryResult),
    isLoading: query.status === "pending",
    isError: query.status === "error",
    error: query.error,
    refetch: query.refetch,
  };
};
