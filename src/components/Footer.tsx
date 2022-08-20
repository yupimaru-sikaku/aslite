import React from 'react';
import Link from 'next/link';
import { ActionIcon, Group } from '@mantine/core';
import { IconBrandTwitter, IconBrandInstagram } from '@tabler/icons';
import useStore from 'src/store';
import { useQueryClient } from 'react-query';
import { supabase } from 'src/utils/supabase';
import { headerLink } from 'src/utils/headerLink';

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
      {/* <div className="bg-gray-700 p-4 sm:p-6">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <a className="flex items-center text-gray-100 no-underline">
                <img
                  className="mr-3 h-9"
                  src="/aslite_logo.webp"
                  alt="aslite_logo"
                  width="40"
                  height="40"
                />
                <p className="text-2xl font-semibold">AsLite</p>
              </a>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-20">
            <div>
              <p className="mb-6 text-sm font-semibold uppercase text-gray-900">
                管理者用
              </p>
              <ul className="list-none pl-0 text-gray-600">
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
                  <Link href="/product/create">
                    <a className="text-gray-100 no-underline">情報登録</a>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/admin/register">
                    <a>
                      <span
                        className="text-gray-100 no-underline hover:cursor-pointer"
                        onClick={signOut}
                      >
                        ログアウト
                      </span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8"></div>
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            © 2022 AsLite™ . All Rights Reserved.
          </span>
          <ul className="flex-end flex items-center rounded-lg md:mt-0 md:flex-row md:space-x-8 md:border-0 md:text-sm md:font-medium">
            {headerLink.map((link) => (
              <li key={link.link}>
                <Link href={link.link}>
                  <a target="_blank">
                    <ActionIcon>
                      <img
                        src={link.src}
                        alt={link.alt}
                        width={link.width}
                        height={link.height}
                      />
                    </ActionIcon>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
    </>
  );
};
