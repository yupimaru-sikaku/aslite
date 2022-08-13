import { useQuery } from 'react-query';
import { supabase } from '../utils/supabase';
import { Product } from 'src/types/';

export const useQueryProductList = () => {
  const getProductList = async () => {
    const { data, error } = await supabase
      .from('product')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) {
      throw new Error(error.message);
    }
    return data;
  };
  return useQuery<Product[], Error>({
    queryKey: ['product'],
    queryFn: getProductList,
    staleTime: Infinity,
  });
};
