import { useQuery } from "@tanstack/react-query";
import { getHero } from "../../sanity/client";
import type { HeroQueryResult } from "../../types/sanity.client.types";

export const useHero = () => {
  const query = useQuery({
    queryKey: ["hero"],
    queryFn: getHero,
    staleTime: Infinity,
  });

  return {
    data: query.data ?? ({} as HeroQueryResult),
    isLoading: query.status === "pending",
    isError: query.status === "error",
    error: query.error,
    refetch: query.refetch,
  };
};
