import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from 'src/types';
import { supabase } from 'src/utils/supabase';

// 接続先のbaseUrlとパスを設定します
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getProductList: builder.query<any, void>({
      queryFn: async () => {
        const { data, error } = await supabase
          .from('product')
          .select('*')
          .order('updated_at', { ascending: false });
        if (error) {
          return { error };
        }
        return { data };
      },
    }),

    getProductById: builder.query({
      queryFn: async (id: string) => {
        const product = await supabase.from('product').select('*').eq('id', id);
        return { data: product };
      },
    }),

    createProduct: builder.mutation({
      queryFn: async (
        product: Omit<
          Product,
          'id' | 'created_at' | 'updated_at' | 'is_display'
        >
      ) => {
        const { error } = await supabase.from('product').insert({
          identification_number: product.identification_number,
          product_name: product.product_name,
          description: product.description,
          genre: product.genre,
          image_url: product.image_url,
        });
        return { error };
      },
    }),

    updateProduct: builder.mutation({
      queryFn: async (product: Product) => {
        const { error } = await supabase
          .from('product')
          .update({
            identification_number: product.identification_number,
            product_name: product.product_name,
            description: product.description,
            genre: product.genre,
            image_url: product.image_url,
            is_display: product.is_display,
          })
          .eq('id', product.id);
        return { error };
      },
    }),

    deleteProduct: builder.mutation({
      queryFn: async (id: string) => {
        const { error } = await supabase.from('product').delete().eq('id', id);
        return { error };
      },
    }),

    // ここからストレージ
    // 画像追加
    addProductImage: builder.mutation({
      queryFn: async ({ imagePath, file }) => {
        const { error } = await supabase.storage
          .from('product')
          .upload(imagePath, file);
        return { error };
      },
    }),

    // Supabase内の画像のURL取得
    downloadProductURL: builder.query({
      queryFn: async (imagePathString) => {
        // 整形
        const imagePathListArr = imagePathString
          .replace('[', '')
          .replace(']', '')
          .split(',');
        // URL取得
        try {
          const imageUrlList = await Promise.all(
            imagePathListArr.map(async (imagePath: any) => {
              const imagePathString = imagePath.replace(/"/g, '');
              const { data, error } = await supabase.storage
                .from('product')
                .download(imagePathString);
              if (error) {
                throw new Error(error.message);
              }
              return URL.createObjectURL(data!);
            })
          );
          return { data: imageUrlList };
        } catch (error) {
          return { error };
        }
        // return { data: filePathListStringArr };
        // const { data: productURL, error } = await supabase.storage
        //   .from('product')
        //   .download(filePath);
        // if (error) {
        //   return { error };
        // }
        // const data = URL.createObjectURL(productURL!);
        // return { data };
      },
    }),

    deleteProudctImage: builder.mutation({
      queryFn: async (imagePath) => {
        let prevImagePathList = imagePath
          .replace('[', '')
          .replace(']', '')
          .replace(/"/g, '');
        // 既存の画像が一種類ならそのまま
        // 複数ならカンマを起点に、配列化
        prevImagePathList = prevImagePathList.match(/,/)
          ? prevImagePathList.split(',')
          : prevImagePathList;

        // 既存の画像が一種類の場合
        if (typeof prevImagePathList === 'string') {
          const { error } = await supabase.storage
            .from('product')
            .remove([prevImagePathList]);
          return { error };
          // 既存画像が複数の場合;
        } else {
          prevImagePathList.map(async (prevImagePath: any) => {
            const { error } = await supabase.storage
              .from('product')
              .remove([prevImagePath]);
            return { error };
          });
        }
        return { error: null };
      },
    }),
  }),
});

// createApiで定義したendpointsにあわせたhooksを自動生成してくれますので、利用するものをexportします。
// use + endpointsで定義した名称 + Query という名称で作成されるようです。
// 他にuseLazy + endpointsで定義した名称 + Queryも作成されます。
export const {
  useGetProductListQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useAddProductImageMutation,
  useDownloadProductURLQuery,
  useDeleteProudctImageMutation,
} = productApi;
