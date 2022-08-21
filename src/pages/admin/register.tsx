import { FC } from 'react';
import { AdminRegisterForm } from 'src/components/AdminRegisterForm';
import { Layout } from 'src/components/Layout';

const AdminRegister: FC = () => {
  return (
    <Layout title="あすらいと|登録ページ">
      <AdminRegisterForm />
    </Layout>
  );
};

export default AdminRegister;
