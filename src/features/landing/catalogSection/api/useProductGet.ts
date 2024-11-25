import axiosInstance from '@/src/shared/lib/axios';
import { useQuery } from '@tanstack/react-query';

const fetchProducts = async () => {
  const response = await axiosInstance.get('/posts');
  return response.data;
};

export const useProductsGet = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
};
