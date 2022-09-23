import type { NextPage } from 'next';
import { AboutUs } from 'src/components/AboutUs';
import { Layout } from 'src/components/Layout';
import { Activity } from 'src/components/Activity';
import { MainContent } from 'src/components/Product/MainContent';
import { motion } from 'framer-motion';
import { HeroSection } from 'src/components/HeroSection';

const Home: NextPage = () => {
  return (
    <Layout title={'トップページ | あすらいと'}>
      <div>
        <HeroSection />

        <div className="p-vw-48" />

        <MainContent />

        <div className="p-vw-48" />

        <AboutUs />

        <div className="p-vw-48" />

        <Activity />
      </div>
    </Layout>
  );
};

export default Home;
