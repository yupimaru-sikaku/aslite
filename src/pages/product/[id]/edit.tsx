import { Layout } from 'src/components/Layout';

const ProductIdEdit = () => {
  return (
    <Layout title="編集ページ">
      <div>ProductEdit</div>
    </Layout>
  );
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   try {
//     const { data, error } = await supabase.from('product').select('id');
//     if (error) {
//       throw error;
//     }
//     if (data) {
//       const paths = data.map((product) => ({
//         params: {
//           id: JSON.stringify(product.id),
//         },
//       }));
//       return {
//         paths: paths,
//         fallback: 'blocking',
//       };
//     }
//     return {
//       paths: [],
//       fallback: false,
//     };
//   } catch (error) {
//     return {
//       paths: [],
//       fallback: false,
//     };
//   }
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   try {
//     const id = params?.id;
//     const { data } = await supabase.from('product').select('*').eq('id', id);

//     return {
//       props: { data },
//     };
//   } catch (error: any) {
//     return { props: { errors: error.message } };
//   }
// };

export default ProductIdEdit;

// import { GetStaticPaths, GetStaticProps } from 'next';
// import React, { useEffect } from 'react';
// import { Layout } from 'src/components/Layout';
// import { ProductEdit } from 'src/components/ProductEdit';
// import { Product } from 'src/types';
// import { supabase } from 'src/utils/supabase';

// const ProductIdEdit = ({ data }: any) => {
//   const product = data[0];
//   return (
//     <Layout title="編集ページ">
//       <ProductEdit product={product} />
//     </Layout>
//   );
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   try {
//     const { data, error } = await supabase.from('product').select('id');
//     if (error) {
//       throw error;
//     }
//     if (data) {
//       const paths = data.map((product) => ({
//         params: {
//           id: JSON.stringify(product.id),
//         },
//       }));
//       return {
//         paths: paths,
//         fallback: 'blocking',
//       };
//     }
//     return {
//       paths: [],
//       fallback: false,
//     };
//   } catch (error) {
//     return {
//       paths: [],
//       fallback: false,
//     };
//   }
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   try {
//     const id = params?.id;
//     const { data } = await supabase.from('product').select('*').eq('id', id);

//     return {
//       props: { data },
//     };
//   } catch (error: any) {
//     return { props: { errors: error.message } };
//   }
// };

// export default ProductIdEdit;
