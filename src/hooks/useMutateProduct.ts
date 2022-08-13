import { useMutation } from 'react-query';
import { supabase } from '../utils/supabase';
import useStore from '../store';
import { Product, EditedProduct } from 'src/types';

export const useMutateProduct = () => {
  const reset = useStore((state) => state.resetEditedProduct);

  const createProductMutation = useMutation(
    async (product: Omit<Product, 'id' | 'created_at'>) => {
      const { data, error } = await supabase.from('product').insert(product);
      if (error) throw new Error(error.message);
      return data;
    },
    {
      onSuccess: () => {
        reset();
      },
      onError: (err: any) => {
        alert(err.message);
        reset();
      },
    }
  );

  const updateProductMutation = useMutation(
    async (product: EditedProduct) => {
      const { data, error } = await supabase
        .from('product')
        .update({
          identification_number: product.identification_number,
          product_name: product.product_name,
          description: product.description,
          genre: product.genre,
          image_url: product.image_url,
        })
        .eq('id', product.id);
      if (error) throw new Error(error.message);
      return data;
    },
    {
      onSuccess: () => {
        reset();
      },
      onError: (err: any) => {
        alert(err.message);
        reset();
      },
    }
  );

  const deleteProductMutation = useMutation(
    async (id: string) => {
      const { data, error } = await supabase
        .from('product')
        .delete()
        .eq('id', id);
      if (error) throw new Error(error.message);
      return data;
    },
    {
      onSuccess: () => {
        reset();
      },
      onError: (err: any) => {
        alert(err.message);
        reset();
      },
    }
  );
  return {
    deleteProductMutation,
    createProductMutation,
    updateProductMutation,
  };
};
