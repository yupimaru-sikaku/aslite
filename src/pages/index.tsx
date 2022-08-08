import type { NextPage } from 'next'
import { AboutTable } from 'src/components/AboutTable'
import { Layout } from 'src/components/Layout'

const Home: NextPage = () => {
  return (
    <Layout title={'トップページ'}>
      <div>
        <AboutTable />
      </div>
    </Layout>
  )
}

export default Home
