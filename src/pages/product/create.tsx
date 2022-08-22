import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Layout } from 'src/components/Layout';
import { ProductForm } from 'src/components/ProductForm';
import { supabase } from 'src/utils/supabase';

const ProductCreate = () => {
  const router = useRouter();

  useEffect(() => {
    const user = supabase.auth.user();
    if (!user) {
      router.push('/');
    }
  }, []);

  return (
    <Layout title="投稿ページ">
      <ProductForm />
    </Layout>
  );
};

export default ProductCreate;
