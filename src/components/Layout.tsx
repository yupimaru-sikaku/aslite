import Head from 'next/head';
import React, { FC, ReactNode } from 'react';
import { Navbar } from 'src/components/Layout/Navbar';
import { Footer } from 'src/components/Layout/Footer';

type Props = {
  title: string;
  children: ReactNode;
};

export const Layout: FC<Props> = ({ title = 'あすらいと', children }) => {
  return (
    <div className="flex h-screen flex-col">
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <main className="my-12 h-auto flex-grow px-6 sm:px-20 md:my-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};
