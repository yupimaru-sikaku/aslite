import React from 'react';
import { Layout } from 'src/components/Layout';
import { ProductForm } from 'src/components/ProductForm';

const ProductCreate = () => {
  return (
    <Layout title="投稿ページ">
      <ProductForm />
    </Layout>
  );
};

export default ProductCreate;
