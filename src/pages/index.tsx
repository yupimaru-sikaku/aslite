import type { NextPage } from 'next';
import { AboutUs } from 'src/components/AboutUs';
import { Layout } from 'src/components/Layout';
import { ProductList } from 'src/components/ProductList';
import { Activity } from 'src/components/Activity';
import { MainContent } from 'src/components/Product/MainContent';
import { motion } from 'framer-motion';

const Home: NextPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }} // 初期状態
      animate={{ opacity: 1, y: 0 }} // マウント時
      exit={{ opacity: 0, y: 10 }} // アンマウント時
      transition={{
        duration: 0.5,
      }}
    >
      <Layout title={'トップページ | あすらいと'}>
        <div>
          <MainContent />

          <div className="p-vw-48" />

          <AboutUs />

          <div className="p-vw-48" />

          <Activity />
        </div>
      </Layout>
    </motion.div>
  );
};

export default Home;
