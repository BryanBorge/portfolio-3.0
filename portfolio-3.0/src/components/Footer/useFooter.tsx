import { useQuery } from "@tanstack/react-query";
import { getFooterSettings } from "../../sanity/client";
import type { FooterQueryResponse } from "../../types/sanity.client.types";

export const useFooter = () => {
  const query = useQuery({
    queryKey: ["footerSetting"],
    queryFn: getFooterSettings,
    staleTime: Infinity,
  });

  return {
    data: query.data ?? ({} as FooterQueryResponse),
    isLoading: query.status === "pending",
    isError: query.status === "error",
    error: query.error,
    refetch: query.refetch,
  };
};
