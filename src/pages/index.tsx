import type { NextPage } from 'next';
import { AboutUs } from 'src/components/AboutUs';
import { Layout } from 'src/components/Layout';
import { ProductList } from 'src/components/ProductList';
import { Activity } from 'src/components/Activity';
import { MainContent } from 'src/components/Product/MainContent';

const Home: NextPage = () => {
  return (
    <Layout title={'トップページ | あすらいと'}>
      <div>
        <MainContent />
        <AboutUs />

        <div className="p-vw-48" />

        <Activity />

        <div className="p-vw-48" />

        <ProductList />
      </div>
    </Layout>
  );
};

export default Home;
