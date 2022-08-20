import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { headerLink } from 'src/utils/headerLink';

type Props = {
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NavBarModal = ({ setIsModal }: Props) => {
  useEffect(() => {
    () => setIsModal(false);
  }, []);
  return (
    <div className="h-modal z-100 fixed top-0 right-0 left-0 flex w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 md:h-full">
      <div className="relative h-full w-full max-w-md p-4 md:h-auto">
        <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-toggle="crypto-modal"
            onClick={() => setIsModal(false)}
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="rounded-t border-b py-4 px-6 dark:border-gray-600">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white lg:text-xl">
              メニュー
            </h3>
          </div>
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
        </div>
      </div>
    </div>
  );
};
