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
    <div className="flex h-screen animate-fade-in flex-col">
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <main className="h-auto flex-grow px-6 xs:px-10 md:mx-auto md:max-w-screen-md lg:max-w-screen-lg lg:px-0">
        {children}
      </main>
      <Footer />
    </div>
  );
};
