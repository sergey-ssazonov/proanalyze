import axiosInstance from '@/src/shared/lib/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const submitForm = async () => {
  const response = await axiosInstance.post('/posts');
  return response.data;
};

export const useFormSubmit = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: submitForm,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};
