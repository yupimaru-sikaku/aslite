import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from 'src/lib/mantine/useMediaQuery';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Props = {
  imageList: string[];
};

export const ActivityCarousel = ({ imageList }: Props) => {
  const [slideSize, setSlideSize] = useState<string>('75%');
  const [height, setHeight] = useState<number>(300);

  const lagerThanXs = useMediaQuery('xs');
  const lagerThanSm = useMediaQuery('sm');
  const lagerThanMd = useMediaQuery('md');

  useEffect(() => {
    if (lagerThanMd) {
      setSlideSize('50%');
      setHeight(400);
    } else if (lagerThanSm) {
      setSlideSize('60%');
      setHeight(300);
    } else if (lagerThanXs) {
      setSlideSize('75%');
      setHeight(300);
    } else {
      setSlideSize('100%');
      setHeight(250);
    }
  }, [lagerThanXs, lagerThanMd]);

  return (
    <Carousel
      slideSize={slideSize}
      height={height}
      slideGap={75}
      withControls
      sx={{
        img: {
          borderRadius: '1rem',
        },
      }}
    >
      {imageList.map((image) => (
        <Carousel.Slide key={image}>
          <Image src={image} alt="aquarimu" layout="fill" />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
