import { Badge, Divider, Text } from '@mantine/core';
import React from 'react';
import { GradientText } from 'src/components/GradientText';
import { aboutUsContent } from 'src/utils/aboutUsContent';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'src/lib/mantine/useMediaQuery';
import { DataTable } from 'mantine-datatable';
import aboutUsList from 'src/utils/aboutUsList.json';

export const AboutUs = () => {
  return (
    <div className="px-3">
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
        <DataTable
          idAccessor="name"
          striped
          withBorder
          withColumnBorders
          columns={[
            { accessor: 'name', title: '会社名', width: '40%' },
            { accessor: 'post', title: '合同会社あすらいと' },
          ]}
          records={aboutUsList}
        ></DataTable>
      </motion.div>
    </div>
  );
};
