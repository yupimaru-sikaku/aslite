import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from 'src/libs/mantine/useMediaQuery';
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
    <Carousel align="start" slideSize="70%" slideGap="md" dragFree>
      {imageList.map((image) => (
        <Carousel.Slide key={image}>
          <Image
            src={image}
            alt="aquarimu"
            width={100}
            height={100}
            layout="responsive"
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};