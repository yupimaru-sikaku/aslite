import { Divider, Text } from '@mantine/core';
import React from 'react';
import { GradientText } from 'src/components/GradientText';
import { aboutUsContent } from 'src/utils/aboutUsContent';

export const AboutUs = () => {
  return (
    <div className="p-4">
      <h1 className="text-center text-xl md:text-lg">
        <GradientText title={'ABOUT US'} />
      </h1>

      <div className="p-vw-8" />

      {aboutUsContent.map((content) => (
        <>
          <div className="md:text-md my-6 flex text-sm">
            <p className="w-1/5">{content.label}</p>
            <p className="ml-3 w-4/5">{content.text}</p>
          </div>
          <Divider labelPosition="center" color="lightGray" my="xs" />
        </>
      ))}
    </div>
  );
};
