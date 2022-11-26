import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from 'src/libs/mantine/useMediaQuery';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';

type Props = {
  imageList: string[];
};

export const ActivityCarousel = ({ imageList }: Props) => {
  const [slideSize, setSlideSize] = useState<string>('75%');
  const [height, setHeight] = useState<number>(300);
  const autoplay = useRef(Autoplay({ delay: 2000 }));

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
      align="start"
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      slideSize="40%"
      slideGap="md"
      withControls={false}
      dragFree
      styles={{
        control: {
          opacity: '0.3',
        },
      }}
    >
      {imageList.map((image) => (
        <Carousel.Slide key={image}>
          <div>
            <Image
              src={image}
              width={100}
              height={100}
              layout="responsive"
              priority={false}
            />
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
