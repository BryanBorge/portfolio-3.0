import { useQuery } from "@tanstack/react-query";
import { getHeroData } from "../../sanity/client";
import type { Hero } from "../../types/sanity.types";

export const useHero = () => {
  const query = useQuery({
    queryKey: ["hero"],
    queryFn: getHeroData,
    staleTime: Infinity,
  });

  return {
    data: query.data ?? ({} as Hero),
    isLoading: query.status === "pending",
    isError: query.status === "error",
    error: query.error,
    refetch: query.refetch,
  };
};
