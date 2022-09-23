import { Badge, Divider, Text } from '@mantine/core';
import React from 'react';
import { GradientText } from 'src/components/GradientText';
import { aboutUsContent } from 'src/utils/aboutUsContent';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'src/lib/mantine/useMediaQuery';

export const AboutUs = () => {
  const largerThanSm = useMediaQuery('sm');

  return (
    <div>
      <h1 className="text-center text-xl md:text-lg">
        <GradientText title={'ABOUT US'} />
      </h1>

      <div className="p-vw-8" />

      <motion.div
        variants={{
          offscreen: {
            // 画面外の場合のスタイル
            y: 100,
            opacity: 0,
          },
          onscreen: {
            // 画面内の場合のスタイル
            y: 0,
            opacity: 1,
            transition: {
              duration: 1,
            },
          },
        }}
        initial="offscreen" // 初期表示はoffscreen
        whileInView="onscreen" // 画面内に入ったらonscreen
        viewport={{ once: false, amount: 0 }}
      >
        {aboutUsContent.map((content) => (
          <div key={content.label} className="mx-auto max-w-3xl text-center">
            <div className="my-6 flex text-sm md:text-xl">
              <Badge
                sx={{ width: '20%' }}
                variant="light"
                color="green"
                size={`${largerThanSm ? 'xl' : 'md'}`}
              >
                {content.label}
              </Badge>
              <p className="ml-3 w-4/5">{content.text}</p>
            </div>
            <div className="p-vw-4" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
