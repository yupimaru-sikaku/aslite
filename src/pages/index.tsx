import type { NextPage } from 'next';
import { useEffect } from 'react';
import { AboutTable } from 'src/components/AboutTable';
import { Layout } from 'src/components/Layout';
import useStore from 'src/store';
import { supabase } from 'src/utils/supabase';

const Home: NextPage = () => {
  // Zustandでセッション情報を格納している場合
  const session = useStore((state) => state.session);
  const setSession = useStore((state) => state.setSession);
  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, [setSession]);

  return (
    <Layout title={'トップページ'}>
      <div>
        <AboutTable />
        <div className="p-vw-8" />
      </div>
    </Layout>
  );
};

export default Home;
