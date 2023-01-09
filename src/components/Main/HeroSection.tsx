import { BackgroundImage } from '@mantine/core';
import { BaseText } from '../Common/BaseText';

export const HeroSection = () => {
  return (
    <BackgroundImage src="/aslite_logo.webp" radius='lg'>
      <main className="p-3">
        <div className="p-vw-32" />

        <BaseText size={100} color="white" fontFamily="Work Sans">
          Plant Medaka
          <br />
          Better Than Best. <br />
        </BaseText>

        <div className="p-vw-8" />

        <BaseText size={50} color="white">
          植物と生命と暮らそう
          <br />
          小さな世界から、無限の世界に思いを馳せて
        </BaseText>

        <div className="p-vw-32" />
      </main>
    </BackgroundImage>
  );
};
