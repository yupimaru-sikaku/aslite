import Head from 'next/head';
import React, { FC, ReactNode } from 'react';
import { Navbar } from 'src/components/Navbar';
import { Footer } from 'src/components/Footer';
import { ErrorBoundary } from 'react-error-boundary';
import { ExclamationCircleIcon } from '@heroicons/react/outline';

type Props = {
  title: string;
  children: ReactNode;
};

export const Layout: FC<Props> = ({ title = 'あすらいと', children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <main className="my-12 px-1 md:my-20 sm:px-20">{children}</main>
      <Footer />
    </>
  );
};
