import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { AdminRegisterForm } from 'src/components/AdminRegisterForm';
import { Layout } from 'src/components/Layout';
import { supabase } from 'src/utils/supabase';

const AdminRegister: FC = () => {
  const router = useRouter();

  useEffect(() => {
    const user = supabase.auth.user();
    if (user) {
      router.push('/');
    }
  }, []);

  return (
    <Layout title="あすらいと|登録ページ">
      <AdminRegisterForm />
    </Layout>
  );
};

export default AdminRegister;
