import type { NextPage } from 'next';
import { AboutUs } from 'src/components/AboutUs';
import { Layout } from 'src/components/Layout';
import { ProductList } from 'src/components/ProductList';

const Home: NextPage = () => {
  return (
    <Layout title={'トップページ'}>
      <div>
        <AboutUs />

        <div className="p-vw-8" />

        <ProductList />
      </div>
    </Layout>
  );
};

export default Home;
