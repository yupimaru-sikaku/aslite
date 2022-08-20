import { Carousel } from '@mantine/carousel';
import Image from 'next/image';

type Props = {
  image_url: string[];
};

export const ProductCarousel = ({ image_url }: Props) => {
  return (
    <Carousel
      sx={{ maxWidth: 320 }}
      mx="auto"
      height={200}
      dragFree
      slideGap="xs"
      align="start"
      styles={{
        control: {
          '&[data-inactive]': {
            opacity: 0,
            cursor: 'default',
          },
        },
      }}
    >
      {image_url.map((image) => (
        <Carousel.Slide key={image}>
          <Image src={image} alt="product" layout="fill" />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
