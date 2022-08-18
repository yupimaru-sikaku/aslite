import { ActionIcon } from '@mantine/core';
import Link from 'next/link';
import React, { useState } from 'react';
import { IconMailForward } from '@tabler/icons';
import { NavBarModal } from './NavBarModal';

type linkType = {
  title: string;
  link: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const HeaderLink: linkType[] = [
  {
    title: 'Instagram',
    link: 'https://www.instagram.com/accounts/login/?next=/asuright.llc/',
    src: '/instagram_logo.webp',
    alt: 'instagram_icon',
    width: 20,
    height: 20,
  },
  {
    title: 'Yahooオークション',
    link: 'https://auctions.yahoo.co.jp/seller/aujlv92378?',
    src: '/yahoo_logo.webp',
    alt: 'yahoo_logo',
    width: 24,
    height: 24,
  },
  {
    title: 'メルカリ',
    link: 'https://mercari-shops.com/shops/7NxZsW4KQtjVK9u7cyZVgH?source=shared_link&utm_source=shared_link',
    src: '/mercari_logo.webp',
    alt: 'mercari_logo',
    width: 32,
    height: 32,
  },
];

export const Navbar = () => {
  const [isModal, setIsModal] = useState<boolean>(false);

  if (isModal) {
    return (
      <div className="z-100 fixed top-0 h-screen w-screen bg-gray-900">
        <NavBarModal setIsModal={setIsModal} />
      </div>
    );
  }

  return (
    <nav className="w-full border-b border-gray-600 bg-gray-800 px-2 py-2.5 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/">
          <a className="flex items-center">
            <img
              className="mr-3 h-9"
              src="/aslite_logo.webp"
              alt="aslite_logo"
              width={40}
              height={40}
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold">
              AsLite
            </span>
          </a>
        </Link>
        <div className="flex md:order-2">
          <button
            type="button"
            className="mr-3 flex items-center rounded-lg bg-blue-700 px-3 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 md:mr-0 md:px-5"
          >
            <IconMailForward size={20} />
            <span className="ml-1">Contact</span>
          </button>
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
            {HeaderLink.map((link) => (
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
      </div>
    </nav>
  );
};
