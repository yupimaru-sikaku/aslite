import { ApiError } from '@supabase/supabase-js';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Layout } from 'src/components/Layout';
import { SendEmailForm } from 'src/components/SendEmailForm';
import { supabase } from 'src/utils/supabase';

const SendEmailToResetPassword: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const user = supabase.auth.user();
    if (user) {
      router.push('/');
    }
  }, []);

  return (
    <Layout title="あすらいと|パスワードをお忘れですか？">
      <SendEmailForm />
    </Layout>
  );
};

export default SendEmailToResetPassword;
