import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { mainContentList } from 'src/utils/mainContentList';
import { BaseText } from 'src/components/Common/BaseText';

export const MainContent = () => {
  const contentList = mainContentList;
  return (
    <main id="mainContent">
      <BaseText size={100} color="green" align="center" fontFamily="Work Sans">
        LINE UP
      </BaseText>

      <div className="p-vw-8" />

      <ul className="grid grid-cols-2 gap-4 xs:grid-cols-3">
        {contentList.map((content) => {
          return (
            <Link href={content.path} key={content.title}>
              <li className="group rounded-xl border px-10 py-5 hover:cursor-pointer">
                <a className="flex flex-col items-center">
                  <Image
                    src={`${content.image}`}
                    alt={`${content.imageAlt}`}
                    width={200}
                    height={200}
                    priority={false}
                    className="transition-all ease-in group-hover:scale-110 group-hover:opacity-50"
                  />
                  <div className="p-vw-4" />
                  <BaseText fontFamily="Work Sans" color="gray">
                    {content.title}
                  </BaseText>
                </a>
              </li>
            </Link>
          );
        })}
      </ul>
    </main>
  );
};
