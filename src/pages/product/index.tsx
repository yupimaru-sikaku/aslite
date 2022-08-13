import { ExclamationCircleIcon } from '@heroicons/react/solid';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Feed } from 'src/components/Feed';
import { Layout } from 'src/components/Layout';
import { Spinner } from 'src/components/Spinner';
import useStore from 'src/store';

const ProductList = () => {
  const session = useStore((state) => state.session);
  console.log(session);
  return (
    <Layout title="商品">
      <ErrorBoundary
        fallback={
          <ExclamationCircleIcon className="my-5 h-10 w-10 text-pink-500" />
        }
      >
        <Suspense fallback={<Spinner />}>
          <Feed />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
};

export default ProductList;
