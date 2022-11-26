import { ActionIcon } from '@mantine/core';
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from '@tabler/icons';
import { headerLink } from 'src/utils/headerLink';
import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
  return (
    <div className="w-full border-t bg-gray-100 px-2 py-10 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/">
          <a className="flex items-center">
            <Image
              src="/aslite_logo_2.webp"
              alt="aslite_logo"
              width={60}
              height={60}
              className="rounded-full"
            />
            <span className="ml-3 self-center whitespace-nowrap text-xl font-semibold">
              ASLITE
            </span>
          </a>
        </Link>

        <nav>
          <ul className="flex items-center space-x-2 md:border-0 md:text-sm md:font-medium">
            {headerLink.map((link) => (
              <li key={link.link}>
                <Link href={link.link}>
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
          </ul>
        </nav>

        <aside className="hidden gap-4 md:flex">
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </aside>
      </div>
    </div>
  );
};
