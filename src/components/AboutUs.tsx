import { Divider, Text } from '@mantine/core';
import React from 'react';
import { GradientText } from 'src/components/GradientText';
import { aboutUsContent } from 'src/utils/aboutUsContent';
import { motion } from 'framer-motion';

export const AboutUs = () => {
  return (
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
      <div className="p-4">
        <h1 className="text-center text-xl md:text-lg">
          <GradientText title={'ABOUT US'} />
        </h1>

        <div className="p-vw-8" />

        {aboutUsContent.map((content) => (
          <div key={content.label}>
            <div className="my-6 flex text-sm md:text-xl">
              <p className="w-1/5">{content.label}</p>
              <p className="ml-3 w-4/5">{content.text}</p>
            </div>
            <Divider labelPosition="center" color="lightGray" my="xs" />
          </div>
        ))}
      </div>
    </motion.div>
  );
};
