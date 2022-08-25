import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from 'src/lib/mantine/useMediaQuery';
import Image from 'next/image';

type Props = {
  imageList: string[];
};

export const ActivityCarousel = ({ imageList }: Props) => {
  const lagerThanMd = useMediaQuery('md');

  const slideSize = lagerThanMd ? '50%' : '75%';
  const height = lagerThanMd ? 400 : 300;

  return (
    <Carousel
      slideSize={slideSize}
      height={height}
      slideGap="xl"
      withControls
      dragFree
      align="start"
    >
      {imageList.map((image) => (
        <Carousel.Slide key={image}>
          <Image src={image} alt="aquarimu" layout="fill" />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
