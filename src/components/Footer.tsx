import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ActionIcon, Group } from '@mantine/core';
import { IconBrandTwitter, IconBrandInstagram } from '@tabler/icons';
import useStore from 'src/store';
import { useQueryClient } from 'react-query';
import { supabase } from 'src/utils/supabase';

export const Footer = () => {
  const session = useStore((state) => state.session);
  const queryClient = useQueryClient();
  const resetProduct = useStore((state) => state.resetEditedProduct);
  const resetProfile = useStore((state) => state.resetEditedProfile);

  const signOut = () => {
    resetProduct();
    resetProfile();
    supabase.auth.signOut();
    queryClient.removeQueries(['product']);
  };

  return (
    <>
      <footer className="bg-gray-700 p-4 dark:bg-gray-900 sm:p-6">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <a className="flex items-center text-gray-100 no-underline">
                <Image src={'/aslite_logo.webp'} width={40} height={40} />
                <span className="ml-1 text-2xl font-semibold">AsLite</span>
              </a>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-20">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Resources
              </h2>
              <ul className="list-none pl-0 text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <Link href="#">
                    <a className="text-gray-100 no-underline">Flowbite</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="text-gray-100 no-underline">TailwindCSS</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Follow us
              </h2>
              <ul className="list-none pl-0 text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <Link href="#">
                    <a className="text-gray-100 no-underline">Flowbite</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="text-gray-100 no-underline">TailwindCSS</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                管理者用
              </h2>
              <ul className="list-none pl-0 text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <Link href="/admin/register">
                    <a className="text-gray-100 no-underline">ログイン</a>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#">
                    <a className="text-gray-100 no-underline">管理者情報</a>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/product">
                    <a className="text-gray-100 no-underline">情報登録</a>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/admin/register">
                    <span
                      className="text-gray-100 no-underline hover:cursor-pointer"
                      onClick={signOut}
                    >
                      ログアウト
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            © 2022 AsLite™ . All Rights Reserved.
          </span>
          <Group spacing={0} position="right" noWrap>
            <Link href="#">
              <ActionIcon size="lg">
                <Image src={'/yahoo_icon.webp'} width={20} height={20} />
              </ActionIcon>
            </Link>
            <Link href="#">
              <ActionIcon size="lg">
                <IconBrandTwitter size={18} stroke={1.5} />
              </ActionIcon>
            </Link>
            <Link href="#">
              <ActionIcon size="lg">
                <IconBrandInstagram size={18} stroke={1.5} />
              </ActionIcon>
            </Link>
          </Group>
        </div>
      </footer>
    </>
  );
};
