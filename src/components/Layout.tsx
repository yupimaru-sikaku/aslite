import Head from 'next/head';
import React, { FC, ReactNode } from 'react';
import { Navbar } from 'src/components/Navbar';
import { Footer } from 'src/components/Footer';

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
      <div className="p-vw-16" />
      <main className="mx-1 md:mx-20">{children}</main>
      <div className="p-vw-16" />
      <Footer />
    </>
  );
};
