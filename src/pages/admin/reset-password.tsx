import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Layout } from 'src/components/Layout';
import { ResetPassword } from 'src/components/ResetPassword';
import { supabase } from 'src/utils/supabase';

const ResetPasswordByEmail: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const user = supabase.auth.user();
    if (user) {
      router.push('/');
    }
  }, []);

  return (
    <Layout title="あすらいと|パスワード再設定？">
      <ResetPassword />
    </Layout>
  );
};

export default ResetPasswordByEmail;
