import { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { SupabaseRealtimePayload } from '@supabase/supabase-js';
import { supabase } from 'src/utils/supabase';
import { Product } from 'src/types';

export const useSubscribeProductList = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const subsc = supabase
      .from('product')
      .on('INSERT', (payload: SupabaseRealtimePayload<Product>) => {
        let prevproductList = queryClient.getQueryData<Product[]>(['product']);
        if (!prevproductList) {
          prevproductList = [];
        }
        queryClient.setQueryData(
          ['product'],
          [
            ...prevproductList,
            {
              id: payload.new.id,
              identification_number: payload.new.identification_number,
              product_name: payload.new.product_name,
              description: payload.new.description,
              genre: payload.new.genre,
              image_url: payload.new.image_url,
              created_at: payload.new.created_at,
            },
          ]
        );
      })
      .on('UPDATE', (payload: SupabaseRealtimePayload<Product>) => {
        let prevproductList = queryClient.getQueryData<Product[]>(['product']);
        if (!prevproductList) {
          prevproductList = [];
        }
        queryClient.setQueryData(
          ['product'],
          prevproductList.map((product) =>
            product.id === payload.new.id
              ? {
                  id: payload.new.id,
                  identification_number: payload.new.identification_number,
                  product_name: payload.new.product_name,
                  description: payload.new.description,
                  genre: payload.new.genre,
                  image_url: payload.new.image_url,
                  created_at: payload.new.created_at,
                }
              : product
          )
        );
      })
      .on('DELETE', (payload: SupabaseRealtimePayload<Product>) => {
        let prevproductList = queryClient.getQueryData<Product[]>(['product']);
        if (!prevproductList) {
          prevproductList = [];
        }
        queryClient.setQueryData(
          ['product'],
          prevproductList.filter((product) => product.id !== payload.old.id)
        );
      })
      .subscribe();

    const removeSubscription = async () => {
      await supabase.removeSubscription(subsc);
    };
    return () => {
      removeSubscription();
    };
  }, [queryClient]);
};
