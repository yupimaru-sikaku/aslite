import { Text } from '@mantine/core';
import React from 'react';
import { useMediaQuery } from 'src/lib/mantine/useMediaQuery';

type Props = {
  title: string;
};

export const GradientText = ({ title }: Props) => {
  const lagerThanXs = useMediaQuery('xs');

  let fontSize: number;

  if (lagerThanXs) {
    fontSize = 32;
  } else {
    fontSize = 24;
  }

  return (
    <Text
      component="span"
      align="center"
      variant="gradient"
      gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
      size={fontSize}
      classNames={{
        root: 'text-xl',
      }}
      weight={900}
    >
      {title}
    </Text>
  );
};
