import type { NextPage } from 'next';
import { AboutUs } from 'src/components/Main/AboutUs';
import { Layout } from 'src/components/Layout/Layout';
import { Activity } from 'src/components/Main/Activity';
import { MainContent } from 'src/components/Product/MainContent';
import { HeroSection } from 'src/components/Main/HeroSection';

const Home: NextPage = () => {
  return (
    <Layout title={'トップページ | あすらいと'}>
      <div>
        <HeroSection />

        <div className="p-vw-12" />

        <MainContent />

        <div className="p-vw-24 " />

        <AboutUs />

        <div className="p-vw-24" />

        <Activity />

        <div className="p-vw-24" />
      </div>
    </Layout>
  );
};

export default Home;
