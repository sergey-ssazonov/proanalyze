import axiosInstance from "@/src/shared/lib/axios";
import { IDecryptionResult } from "../model/DecryptionResult";
import { useQuery } from "@tanstack/react-query";

const getDecryptionResult = async (unique_id: string): Promise<IDecryptionResult> => {
  return await axiosInstance.get(`/orders/${unique_id}/decryption`).then((res) => res.data);
};

export const useGetDecryptionResult = (unique_id: string) => {
  return useQuery({
    queryKey: ["analyze", unique_id],
    queryFn: () => getDecryptionResult(unique_id),
    enabled: !!unique_id,
    refetchInterval: (query) => {
      const data = query.state.data as IDecryptionResult | undefined;
      return data?.decryption !== null ? false : 3000;
    },
    refetchIntervalInBackground: true,
  });
};
