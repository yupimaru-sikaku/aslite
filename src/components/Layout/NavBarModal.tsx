import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { headerLink } from 'src/utils/headerLink';

export const NavBarModal = () => {
  return (
    <div className="p-6">
      <ul className="my-4 space-y-3">
        {headerLink.map((link) => (
          <li key={link.title}>
            <Link href={link.link}>
              <a className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">
                <Image
                  src={link.src}
                  alt={link.alt}
                  width={link.width}
                  height={link.height}
                />
                <span className="ml-3 flex-1 whitespace-nowrap">
                  {link.title}
                </span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
