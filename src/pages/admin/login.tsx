import { useRouter } from 'next/router';
import { useState, FC, useEffect } from 'react';
import { AdminLoginForm } from 'src/components/AdminLoginForm';
import { Layout } from 'src/components/Layout';
import { supabase } from 'src/utils/supabase';

const AdminLogin: FC = () => {
  const router = useRouter();

  useEffect(() => {
    const user = supabase.auth.user();
    if (user) {
      router.push('/');
    }
  }, []);

  return (
    <Layout title="あすらいと|ログインページ">
      <AdminLoginForm />
    </Layout>
  );
};

export default AdminLogin;
