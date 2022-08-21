import { supabase } from '../utils/supabase';

export const useQueryProductList = async () => {
  const { data, error } = await supabase
    .from('product')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) {
    throw new Error(error.message);
  }
  return data;
};
