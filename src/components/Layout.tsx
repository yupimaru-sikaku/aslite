import Head from 'next/head'
import React, { FC, ReactNode } from 'react'
import { Navbar } from 'src/components/Navbar'

type Props = {
  title: string
  children: ReactNode
}

export const Layout: FC<Props> = ({ title = 'あすらいと', children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="mx-1 md:mx-20">{children}</main>
      <footer></footer>
    </div>
  )
}
