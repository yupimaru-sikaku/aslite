import { Button } from '@mantine/core';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { IconSeeding } from '@tabler/icons';
import { Link as Scroll } from 'react-scroll';

export const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }} // 初期状態
      animate={{ opacity: 1, y: 0 }} // マウント時
      exit={{ opacity: 0, y: 10 }} // アンマウント時
      transition={{
        duration: 1,
      }}
    >
      <div className="relative">
        <Image
          src="/aslite_logo.webp"
          className="absolute inset-0 h-full w-full rounded-2xl object-cover"
          alt="aslite-logo"
          layout="fill"
        />
        <div className="relative rounded-3xl bg-gray-400 bg-opacity-75">
          <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="mb-12 w-full max-w-xl xl:mb-0 xl:w-7/12 xl:pr-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }} // 初期状態
                  animate={{ opacity: 1, y: 0 }} // マウント時
                  exit={{ opacity: 0, y: 10 }} // アンマウント時
                  transition={{
                    duration: 2,
                  }}
                >
                  <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                    Plant Medaka
                    <br />
                    Better Than Best. <br />
                  </h2>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }} // 初期状態
                  animate={{ opacity: 1, y: 0 }} // マウント時
                  exit={{ opacity: 0, y: 10 }} // アンマウント時
                  transition={{
                    duration: 3,
                  }}
                >
                  <p className="mb-4 max-w-xl text-base font-bold text-gray-700 md:text-lg">
                    植物と生命と暮らそう
                    <br />
                    小さな世界から、無限の世界に思いを馳せて
                    <br />
                  </p>
                </motion.div>

                <div className="p-vw-16" />

                <motion.div
                  initial={{ opacity: 0, y: 40 }} // 初期状態
                  animate={{ opacity: 1, y: 0 }} // マウント時
                  exit={{ opacity: 0, y: 10 }} // アンマウント時
                  transition={{
                    duration: 4,
                  }}
                >
                  <Scroll
                    to="mainContent"
                    smooth={true}
                    offset={-50}
                    className="font-medium text-[#008c8d] hover:cursor-pointer hover:opacity-50"
                  >
                    <Button
                      color="lime"
                      variant="light"
                      leftIcon={<IconSeeding />}
                    >
                      Learn more ...
                    </Button>
                  </Scroll>
                </motion.div>
              </div>
              <div className="w-full max-w-xl xl:w-5/12 xl:px-8"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
