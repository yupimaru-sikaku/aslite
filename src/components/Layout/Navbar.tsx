import { ActionIcon, CheckIcon } from '@mantine/core';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IconMailForward } from '@tabler/icons';
import { NavBarModal } from '../NavBarModal';
import { headerLink } from 'src/utils/headerLink';
import Image from 'next/image';
import { supabase } from 'src/utils/supabase';
import { LogoutIcon } from '@heroicons/react/outline';
import { showNotification } from '@mantine/notifications';
import { useAppDispatch } from 'src/ducks/store';
import { resetSession } from 'src/ducks/admin/slice';
import { useShoppingCart } from 'use-shopping-cart';
import { IconShoppingCart } from '@tabler/icons';
import { useMediaQuery } from 'src/lib/mantine/useMediaQuery';
import { User } from '@supabase/supabase-js';
import { CartEntry } from 'use-shopping-cart/core';

export const Navbar = () => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [user, setUser] = useState<User>();
  const dispatch = useAppDispatch();
  const largerThanMd = useMediaQuery('md');
  const { cartCount } = useShoppingCart<CartEntry>();

  useEffect(() => {
    const user = supabase.auth.user();
    user && setUser(user);
  }, [user]);

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(undefined);
    dispatch(resetSession());
    showNotification({
      title: 'ログアウトしました',
      message: '',
      icon: (
        <ActionIcon size="xs">
          <CheckIcon />
        </ActionIcon>
      ),
    });
  };

  if (isModal) {
    return (
      <div className="fixed top-0 z-50 h-screen w-screen bg-gray-900">
        <NavBarModal setIsModal={setIsModal} />
      </div>
    );
  }

  return (
    <nav className="w-full border-b px-2 py-2.5 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link scroll={false} href="/">
          <a className="flex items-center">
            <Image
              src="/aslite_logo.webp"
              alt="aslite_logo"
              width={40}
              height={40}
            />
            <span className="ml-3 self-center whitespace-nowrap text-xl font-semibold">
              ASLITE
            </span>
          </a>
        </Link>
        <div className="flex items-center md:order-2">
          {largerThanMd ? (
            <Link scroll={false} href="/contact/create">
              <a>
                <button
                  type="button"
                  className="mr-3 flex items-center rounded-lg bg-green-700 px-3 py-2.5 text-center text-sm font-medium text-white hover:opacity-80 md:mr-0 md:px-5"
                >
                  <IconMailForward size={20} />
                  <span className="ml-1">Contact</span>
                </button>
              </a>
            </Link>
          ) : (
            <Link scroll={false} href="/cart">
              <a className="relative mr-7 mt-1 cursor-pointer">
                <IconShoppingCart />
                <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded-full bg-green-600 px-2 py-1 text-xs font-bold leading-none text-white">
                  {cartCount}
                </span>
              </a>
            </Link>
          )}
          <button
            className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
            onClick={() => setIsModal(true)}
          >
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul className="flex flex-col items-center rounded-lg md:mt-0 md:flex-row md:space-x-8 md:border-0 md:text-sm md:font-medium">
            {headerLink.map((link) => (
              <li key={link.link}>
                <Link scroll={false} href={link.link}>
                  <a target="_blank">
                    <ActionIcon>
                      <Image
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
            {user && (
              <li>
                <ActionIcon size="md" color="dark" onClick={logout}>
                  <LogoutIcon />
                </ActionIcon>
              </li>
            )}
            <Link scroll={false} href="/cart">
              <a>
                <li className="relative">
                  <IconShoppingCart />
                  <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded-full bg-green-600 px-2 py-1 text-xs font-bold leading-none text-white">
                    {cartCount}
                  </span>
                </li>
              </a>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};
