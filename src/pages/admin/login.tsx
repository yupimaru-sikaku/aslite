import { useState, FC } from 'react';
import { AdminLoginForm } from 'src/components/AdminLoginForm';
import { Layout } from 'src/components/Layout';

const AdminLogin: FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  return (
    <Layout title="あすらいと|ログインページ">
      <AdminLoginForm />
    </Layout>
  );
};

export default AdminLogin;
