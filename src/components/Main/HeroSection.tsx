import { BackgroundImage } from '@mantine/core';

export const HeroSection = () => {
  return (
    <BackgroundImage src="/aslite_logo.webp">
      <main className="p-3">
        <div className="p-vw-32" />

        <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
          Plant Medaka
          <br />
          Better Than Best. <br />
        </h2>
        <p className="mb-4 max-w-xl text-base font-bold text-gray-300 md:text-lg">
          植物と生命と暮らそう
          <br />
          小さな世界から、無限の世界に思いを馳せて
          <br />
        </p>
        <div className="p-vw-32" />
      </main>
    </BackgroundImage>
  );
};
