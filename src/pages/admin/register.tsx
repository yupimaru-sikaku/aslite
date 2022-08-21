import { useState, FormEvent, FC } from 'react';
import { AdminRegisterForm } from 'src/components/AdminRegisterForm';
import { Layout } from 'src/components/Layout';

const AdminRegister: FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  return (
    <Layout title="あすらいと|登録ページ">
      <AdminRegisterForm />
    </Layout>
  );
};

export default AdminRegister;
